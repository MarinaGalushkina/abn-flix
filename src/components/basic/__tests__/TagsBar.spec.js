import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TagsBar from "../TagsBar.vue";

describe("TagsBar", () => {
  it("renders correctly with 2 tags", () => {
    const wrapper = mount(TagsBar, {
      props: {
        tags: ['Tag-1', 'Tag-2'],
        activeTags: new Set()
      }
    });
    expect( wrapper.findAll('.tag').length).toBe(2);
    expect(wrapper.html()).toContain('TAG-1');
    expect(wrapper.html()).toContain('TAG-2');
  });
});



