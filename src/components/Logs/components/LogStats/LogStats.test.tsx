import React from "react";
import { shallow } from "enzyme";

// Own
import LogStats from "./LogStats";
import { logsStatsMock } from "./mocks/logStatsMock";
import { StatsCard } from "../../../common/StatsCard";
import { Heading } from "../../../common/Heading";
import { testSelector } from "../../../../tests/testHelper";

describe("LogStats", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<LogStats stats={logsStatsMock} />);
  });

  it(`should show a heading containing Statistics`, () => {
    const heading = wrapper.find(Heading);
    expect(heading).toHaveLength(1);
    expect(heading.text()).toBe("Statistics");
  });

  it(`should show ${Object.keys(logsStatsMock).length} stat cards`, () => {
    expect(wrapper.find(StatsCard)).toHaveLength(
      Object.keys(logsStatsMock).length
    );
  });

  it(`should have a log stat container`, () => {
    expect(wrapper.find(testSelector("log-stats-container"))).toHaveLength(1);
  });
});
