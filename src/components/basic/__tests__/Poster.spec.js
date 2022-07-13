import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Poster from "../Poster.vue";


describe("Poster", () => {
  it("renders with correct attributes", () => {
    const wrapper = mount(Poster, { props: {  
      src:"/image",
      size: "full"  
    } });

    expect( wrapper.find('img').attributes().src).toBe("/image");
    expect(wrapper.classes()).toContain("full");
  });
});

