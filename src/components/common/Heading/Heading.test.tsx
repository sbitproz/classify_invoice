import React from "react";
import { shallow } from "enzyme";

// Own
import Heading from "./Heading";
import { testSelector } from "../../../tests/testHelper";

describe("PaginationNav", () => {
  let wrapper: any;

  const className = "heading-class";
  const testId = "heading-test-id";
  const text = "My Heading";
  const headingLevel = "h2";

  beforeEach(() => {
    wrapper = shallow(
      <Heading testid={testId} className={className} headingLevel="h2">
        {text}
      </Heading>
    );
  });

  it("should find heading with testid", () => {
    expect(wrapper.find(testSelector(testId)).exists()).toBe(true);
  });

  it(`should find heading with className ${testId}`, () => {
    expect(wrapper.find(testSelector(testId)).hasClass(className)).toBe(true);
  });

  it("should find heading with text", () => {
    expect(wrapper.find(testSelector(testId)).text()).toBe(text);
  });

  it(`should have heading level ${headingLevel}`, () => {
    expect(
      wrapper.find(`${testSelector(testId)} ${headingLevel}`).exists()
    ).toBe(true);
  });
});
