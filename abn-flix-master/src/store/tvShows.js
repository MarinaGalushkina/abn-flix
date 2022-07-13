import { defineStore } from "pinia";
import api from "@/api";
import router from "@/router";


export default defineStore("tvShows", {
  state: () => ({
    tvShowsList: new Map(),
    loaded: false,
    error: null,
    details: {
      tvShow: null,
      loaded: false,
      error: null,
    },
    allGenres: new Set(),
    filter: {
      searchBar: null,
      genres: new Set(),
      minRating: null,
    }
  }),
  getters: {
    filterMode: (state) => {
      const { searchBar, genres,  minRating} = state.filter;
      return searchBar || genres.size || minRating;
    },
    filteredTVShows: (state) => {
      const {searchBar, minRating, genres}  = state.filter;
      const tvShows = Array.from(state.tvShowsList.values());
      if(!searchBar && !minRating && !genres.length) return tvShows;
      return tvShows.filter(tvShow => {
        const searchFilter = searchBar ? new RegExp(searchBar, "i").test(tvShow.name) : true;
        const minRatingFilter =  state.filter.minRating ? tvShow.rating.average >= state.filter.minRating : true;
        const genreFilter = state.filter.genres.size ? tvShow.genres.some(genre => state.filter.genres.has(genre)) : true;
        return searchFilter && minRatingFilter && genreFilter;
      } );
    },
    tvShowsByGenres: (state) => {
      return computeTVShowsByGenres(state.filteredTVShows);
    },
  },
  actions: {
    async getTVShows() {
      const { error, tvShows } = await api.getTVShows();
      this.loaded = true;
      if(error) {
        this.error = error;
      } else {
        const sortedTVShows = tvShows.sort((a,b) => b.rating.average - a.rating.average);
        sortedTVShows.map(tvShow => {
          this.tvShowsList.set(tvShow.id, tvShow);
          tvShow.genres.map(genre => this.allGenres.add(genre));
        });
      }
    },
    async getTVShowByID(id) {
      const { error, tvShow } = await api.getTVShowByID(id);
      this.details.loaded = true;
      if(error) {
        this.details.error = error;
      } else {
        this.details.tvShow = tvShow;
      }
    },
    setSearchBar(text) {
      this.filter.searchBar = text;
    },
    setRatingBar(star) {
      this.filter.minRating = star;
    },
    setGenresBar(genre) {
      if(genre.toLowerCase() === "all genres") {
        this.filter.genres.clear();
      } else {
        if(this.filter.genres.has(genre)) {
          this.filter.genres.delete(genre);
        } else {
          this.filter.genres.add(genre);
        }
      }
    },
    resetFilter() {
      this.filter.searchBar = null;
      this.filter.genres.clear();
      this.filter.minRating = null;
    },
    toThePage(url) {
      const pageURL = router.resolve(url);
      window.open(pageURL.href, '_blank');
    }
  },
});

export function computeTVShowsByGenres(tvShows) {
  return tvShows.reduce((computedTVShows, tvShow) => {
    tvShow.genres.forEach(genre => {
      if(genre) {
        if(computedTVShows[genre]) {
          computedTVShows[genre].push(tvShow.id);
        } else {
          computedTVShows[genre] = [tvShow.id];
        }
      } 
    });
    return computedTVShows;
  }, {})
}
