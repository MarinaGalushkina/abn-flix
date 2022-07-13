import { describe, it, expect } from "vitest";
import { computeTVShowsByGenres } from "../tvShows.js";


const tvShows = [{
  id: 1,
  genres: ["A", "B"]
}, {
  id: 2,
  genres: ["B", "C"]
}]

const expectedResult = {
  A: [1],
  B: [1, 2],
  C: [2]
}

describe("Store", () => {
  it("should compute TV shows by Genres", () => {
    const result = computeTVShowsByGenres(tvShows);
    expect(Object.keys(result).length).toBe(3);

    for(let key in expectedResult) {
      expect(expectedResult[key].length === result[key].length);
      expectedResult[key].forEach((genre, index) => {
        expect(genre === result[key][index]);
      })
    }
  });
});



