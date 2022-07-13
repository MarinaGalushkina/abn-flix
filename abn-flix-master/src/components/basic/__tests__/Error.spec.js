import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Error from "../Error.vue";

describe("Error", () => {
  it("corrects error message", () => {
    const wrapper = mount(Error, { props: { errorMessage: "Error" } });
    expect(wrapper.text()).toContain("Error");
  });
});
