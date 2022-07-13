import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Tag from "../Tag.vue";

describe("Tag", () => {
  it("renders correctly", () => {
    const wrapper = mount(Tag, {
      props: {
        tagName: 'New Tag',
        color: 'red'
      }
    });
    expect( wrapper.find('.tag').exists()).toBe(true);
    expect(wrapper.find('.tag').attributes().style).toBe("background-color: red;");
  });
});



