import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AppHeader from "../AppHeader.vue";

describe("AppHeader", () => {
  it("renders correctly", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.text()).toContain("ABN");
    expect(wrapper.text()).toContain("FLIX");
    expect(wrapper.find('svg').exists()).toBe(true);
  });
});



