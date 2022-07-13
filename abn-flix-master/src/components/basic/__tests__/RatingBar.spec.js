import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import RatingBar from "../RatingBar.vue";

describe("RatingBar", () => {
  it("renders correctly (10 stars)", () => {
    const wrapper = mount(RatingBar);
    expect( wrapper.findAll('svg').length).toBe(10);
  });

  it("shows correct rating (5 stars)", () => {
    const wrapper = mount(RatingBar, {
      props: {
        rating: 5
      }
    });
    expect( wrapper.findAll('.filled').length).toBe(5);
  });

  it("renders with the right size", () => {
    const wrapper = mount(RatingBar, {
      props: {
        size: "4.5rem"
      }
    });
    expect( wrapper.find('svg').attributes().width).toBe("4.5rem");
    expect( wrapper.find('svg').attributes().height).toBe("4.5rem");
  });

  it("triggers click", () => {
    let count = 0;
    const wrapper = mount(RatingBar, {
      emits: {
        "update:rating": () => {
          count++
        }
      }
    });
    wrapper.find('svg').trigger('click');
    expect(count).toBe(1);
  });
});



