import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { of } from "rxjs";

// Own
import Logs from "./Logs";
import { logsService } from "./services/logsService";
import { logsResponseMock } from "./mocks/logResponseMock";
import Pagination from "../common/Pagination/Pagination";
import LogTable from "./components/LogTable/LogTable";
import LogStats from "./components/LogStats/LogStats";
import { testSelector } from "../../tests/testHelper";
import { IconButton } from "../common/IconButton";

const { pagination } = logsResponseMock;

describe("Logs", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<Logs />);
  });

  const getLogsSpy = jest
    .spyOn(logsService, "getLogs")
    .mockReturnValue(of(logsResponseMock));
  const pulseLogsSpy = jest
    .spyOn(logsService, "pulseLogs")
    .mockReturnValue(of(logsResponseMock));

  it("should call getLogs on componentDidMount", () => {
    expect(getLogsSpy).toHaveBeenCalled();
  });

  it("should call pulseLogsSpy on componentDidMount", () => {
    expect(pulseLogsSpy).toHaveBeenCalled();
  });

  it("should load the mock and render the table", () => {
    expect(
      wrapper.find(`${testSelector("log-table-container")} tr`)
    ).toHaveLength(26);
  });

  it("should show pagination summary details: end range (count + offset)", () => {
    expect(wrapper.find(`${testSelector("pagination-info")}`).text()).toContain(
      `${pagination.offset + pagination.count}`
    );
  });

  it("should show pagination summary details: offset", () => {
    expect(wrapper.find(`${testSelector("pagination-info")}`).text()).toContain(
      `${pagination.offset + 1}`
    );
  });

  it("should show pagination summary details: total", () => {
    expect(wrapper.find(`${testSelector("pagination-info")}`).text()).toContain(
      `${pagination.total}`
    );
  });

  it("should have a Log Container div", () => {
    expect(wrapper.find(testSelector("logs-container")).exists()).toBe(true);
  });

  it("should show a pagination component", () => {
    expect(wrapper.find(Pagination).exists()).toBe(true);
  });

  it("should show a LogTable component", () => {
    expect(wrapper.find(LogTable).exists()).toBe(true);
  });

  it("should show a LogStats component", () => {
    expect(wrapper.find(LogStats).exists()).toBe(true);
  });
});

describe("Logs: Changing API", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<Logs />);
  });

  const getLogsSpy = jest
    .spyOn(logsService, "getLogs")
    .mockReturnValue(of(logsResponseMock));
  const pulseLogsSpy = jest
    .spyOn(logsService, "pulseLogs")
    .mockReturnValue(of(logsResponseMock));

  it("should change table data when click navigation", () => {
    const logs = wrapper.find(LogTable).props().logs;
    const lastButton = wrapper.find(IconButton).at(3);
    const newMockReturn = {
      ...logsResponseMock,
      logs: [...logsResponseMock.logs.slice(5)],
      pagination: { ...pagination, offset: 50 },
    };
    getLogsSpy.mockReturnValue(of(newMockReturn));
    pulseLogsSpy.mockReturnValue(of(newMockReturn));
    lastButton.simulate("click");
    const newLogs = wrapper.find(LogTable).props().logs;
    expect(logs).not.toEqual(newLogs);
  });
});
