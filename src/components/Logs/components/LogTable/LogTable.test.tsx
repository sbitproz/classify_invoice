import React from "react";
import { shallow } from "enzyme";

// Own
import LogTable from "./LogTable";
import { logsTableMock } from "./mocks/logTableMock";
import { Heading } from "../../../common/Heading";
import { Table } from "../../../common/Table";
import { testSelector } from "../../../../tests/testHelper";

describe("LogStats", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<LogTable logs={logsTableMock} />);
  });

  it(`should show a heading containing logs`, () => {
    const heading = wrapper.find(Heading);
    expect(heading).toHaveLength(1);
    expect(heading.text()).toBe("Logs");
  });

  it(`should have a table`, () => {
    const table = wrapper.find(Table);
    expect(table).toHaveLength(1);
  });

  it(`should have a log table conainer`, () => {
    const tableContainer = wrapper.find(testSelector("log-table-container"));
    expect(tableContainer).toHaveLength(1);
  });
});
