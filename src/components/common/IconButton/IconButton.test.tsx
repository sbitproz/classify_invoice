import React from "react";
import { shallow } from "enzyme";

// Own
import IconButton from "./IconButton";
import { testSelector } from "../../../tests/testHelper";

describe("PaginationNav", () => {
  let wrapper: any;

  const className = "heading-class";
  const testId = "icon-button-test-id";
  const disabledClass = "icon-button--disabled";
  const childrenContent = "contents";

  const handleClicked = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <IconButton
        testid={testId}
        disabled={true}
        className={className}
        onClick={handleClicked}
      >
        <div>{childrenContent}</div>
      </IconButton>
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should find heading with testid", () => {
    expect(wrapper.find(testSelector(testId)).exists()).toBe(true);
  });

  it(`should have div with class ${className}`, () => {
    expect(wrapper.find(`div${testSelector(testId)}`).hasClass(className)).toBe(
      true
    );
  });

  it(`shouldn't have div with class ${className}`, () => {
    wrapper.setProps({ className: undefined });
    expect(wrapper.find(testSelector(testId)).hasClass(className)).not.toBe(
      true
    );
  });

  it(`should show a disabled class when disabled`, () => {
    expect(wrapper.find(testSelector(testId)).hasClass(disabledClass)).toBe(
      true
    );
  });

  it(`shouldn't show a disabled class when not disabled`, () => {
    wrapper.setProps({ disabled: false });
    expect(wrapper.find(testSelector(testId)).hasClass(disabledClass)).not.toBe(
      true
    );
  });

  it(`should contain ${childrenContent}`, () => {
    wrapper.setProps({ disabled: false });
    expect(wrapper.find(testSelector(testId)).text()).toContain(
      childrenContent
    );
  });

  it(`should call function when button clicked`, () => {
    expect(wrapper.find(testSelector(testId)).simulate("click"));
    expect(handleClicked).toHaveBeenCalled();
  });
});
