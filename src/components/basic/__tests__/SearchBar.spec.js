import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SearchBar from "../SearchBar.vue";

describe("SearchBar", () => {
  it("renders correctly", () => {
    const wrapper = mount(SearchBar);
    expect( wrapper.find('input').exists()).toBe(true);
  });

  it("cleans search", async () => {
    let search = 'Text';
    const wrapper = mount(SearchBar, {
      emits: {
        "update:text": (text) => {
          search = text;
        }
      }
    });
    wrapper.find('.clear-icon').trigger('click');
    expect(search).toBe(null);
  });
});



