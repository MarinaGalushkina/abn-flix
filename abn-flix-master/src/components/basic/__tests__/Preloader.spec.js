import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Preloader from "../Preloader.vue";

describe("Preloader", () => {
  it("renders", () => {
    const wrapper = mount(Preloader);
    expect(wrapper.text()).toContain("Loading...");
  });
});
