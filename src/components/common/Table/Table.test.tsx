import React from "react";
import { shallow } from "enzyme";

// Own
import Table from "./Table";
import { logColumnsMocks, tableLogsMock } from "./mocks/tableMocks";
import { testSelector } from "../../../tests/testHelper";

describe("Pagination", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Table columns={logColumnsMocks} data={tableLogsMock} />);
  });

  it("should have rendered Table component", () => {
    expect(wrapper.find(testSelector("table")).exists()).toBe(true);
  });

  it(`should render ${tableLogsMock.length} rows of data`, () => {
    expect(wrapper.find("tbody tr")).toHaveLength(tableLogsMock.length);
  });

  it(`should render ${logColumnsMocks.length} column headers`, () => {
    expect(wrapper.find("thead td")).toHaveLength(
      Object.keys(logColumnsMocks).length
    );
  });
});
