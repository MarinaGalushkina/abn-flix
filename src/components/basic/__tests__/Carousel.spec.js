import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Carousel from "../Carousel.vue";


describe("Carousel", () => {
  it("renders with a slot", () => {
    const wrapper = mount(Carousel, { props: {  
      id: 'carousel',  
      slides: [{id: "one"}, {id: "two"}],
      },       
      slots: {
        default: `
        <div>Slot-{{slide.id}}</div>
      `
    } 
});
    expect(wrapper.html()).toContain('Slot-one');
    expect(wrapper.html()).toContain('Slot-two');
    expect(wrapper.find('#carousel').exists()).toBe(true)
  });
});
