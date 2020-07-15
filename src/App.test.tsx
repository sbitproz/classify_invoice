import React from "react";
import { shallow } from "enzyme";

// Own
import App from "./App";
import { Logs } from "./components/Logs";

describe("App", () => {
  let wrapper;

  it("should show the logs component", () => {
    wrapper = shallow(<App />);
    const logsComponent = wrapper.find(Logs);
    expect(logsComponent).toBeTruthy();
  });
});
