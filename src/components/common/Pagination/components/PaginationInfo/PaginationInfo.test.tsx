import React from "react";
import { shallow } from "enzyme";

// Own
import PaginationInfo from "./PaginationInfo";
import { pagniationInfoMocks } from "../../mocks/paginationMocks";
import { testSelector } from "../../../../../tests/testHelper";

describe("PaginationInfo", () => {
  let wrapper: any;

  const noLogs = "No Logs";
  const withLogs = "Show";

  const percentageWith1Record = ((1 / pagniationInfoMocks.total) * 100).toFixed(
    2
  );
  const percentageWith999999Record = (
    (999999 / pagniationInfoMocks.total) *
    100
  ).toFixed(2);

  beforeEach(() => {
    wrapper = shallow(<PaginationInfo pageInformation={pagniationInfoMocks} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should show pagination summary details: end range (count + offset)", () => {
    expect(wrapper.find(`${testSelector("pagination-info")}`).text()).toContain(
      `${pagniationInfoMocks.offset + pagniationInfoMocks.count}`
    );
  });

  it("should show pagination summary details: offset", () => {
    expect(wrapper.find(`${testSelector("pagination-info")}`).text()).toContain(
      `${pagniationInfoMocks.offset + 1}`
    );
  });

  it("should show pagination summary details: total", () => {
    expect(wrapper.find(`${testSelector("pagination-info")}`).text()).toContain(
      `${pagniationInfoMocks.total}`
    );
  });

  it(`should show 'Show' when total is greater than 0`, () => {
    expect(wrapper.find(`${testSelector("pagination-info")}`).text()).toContain(
      withLogs
    );
  });

  it(`should show 'no logs' when total is 0`, () => {
    wrapper.setProps({ pageInformation: { ...pagniationInfoMocks, total: 0 } });
    expect(wrapper.find(`${testSelector("pagination-info")}`).text()).toContain(
      noLogs
    );
  });

  it(`should show 'no logs' when total is 0`, () => {
    wrapper.setProps({ pageInformation: { ...pagniationInfoMocks, total: 0 } });
    expect(wrapper.find(`${testSelector("pagination-info")}`).text()).toContain(
      noLogs
    );
  });

  it(`should show ${percentageWith1Record} when there's 1 record`, () => {
    wrapper.setProps({
      pageInformation: { ...pagniationInfoMocks, offset: 1 },
    });
    expect(wrapper.find(`${testSelector("pagination-info")}`).text()).toContain(
      percentageWith1Record
    );
  });

  it(`should show ${percentageWith999999Record} when there's 2 records`, () => {
    wrapper.setProps({
      pageInformation: { ...pagniationInfoMocks, offset: 999999 },
    });
    expect(wrapper.find(`${testSelector("pagination-info")}`).text()).toContain(
      percentageWith999999Record
    );
  });
});
