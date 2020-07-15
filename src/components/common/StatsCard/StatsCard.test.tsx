import React from "react";
import { shallow } from "enzyme";

// Own
import StatsCard from "./StatsCard";
import * as icon from "@fortawesome/free-solid-svg-icons";
import { testSelector } from "../../../tests/testHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("Pagination", () => {
  let wrapper: any;

  const darkColour = "red";
  const lightColour = "red";

  beforeEach(() => {
    wrapper = shallow(
      <StatsCard
        count={5}
        darkColor={darkColour}
        lightColor={lightColour}
        icon={icon.faAddressBook}
        name="Statistics"
      />
    );
  });

  it("should have rendered Table component", () => {
    expect(wrapper.find(testSelector("stats-card")).exists()).toBe(true);
  });

  it("should have a font awesome component", () => {
    expect(wrapper.find(FontAwesomeIcon).exists()).toBe(true);
  });

  it("should set the background on the main stats card", () => {
    expect(
      wrapper.find(testSelector("stats-card")).prop("style")
    ).toHaveProperty("backgroundColor", darkColour);
  });

  it("should set the background on the main stats card", () => {
    expect(
      wrapper.find(testSelector("stats-card-text")).prop("style")
    ).toHaveProperty("backgroundColor", lightColour);
  });
});
