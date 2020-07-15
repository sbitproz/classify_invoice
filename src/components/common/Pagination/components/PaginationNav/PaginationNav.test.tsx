import React from "react";
import { shallow } from "enzyme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Own
import PaginationNav from "./PaginationNav";
import { pagniationInfoMocks } from "../../mocks/paginationMocks";
import { IconButton } from "../../../IconButton";
import { testSelector } from "../../../../../tests/testHelper";

describe("PaginationNav", () => {
  let wrapper: any;

  const [onFirst, onPrior, onNext, onLast] = [
    jest.fn(),
    jest.fn(),
    jest.fn(),
    jest.fn(),
  ];
  const [FIRST, PRIOR, NEXT, LAST] = [0, 1, 2, 3];

  beforeEach(() => {
    wrapper = shallow(
      <PaginationNav
        pageInformation={pagniationInfoMocks}
        onClickFirst={onFirst}
        onClickPrior={onPrior}
        onClickNext={onNext}
        onClickLast={onLast}
      />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render four buttons", () => {
    expect(wrapper.find(IconButton)).toHaveLength(4);
  });

  it("should render four buttons", () => {
    expect(wrapper.find(testSelector("pagination-nav")).exists()).toBe(true);
  });

  it("should render four buttons", () => {
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(4);
  });

  it("should call onFirst when first button is click", () => {
    wrapper.find(IconButton).at(FIRST).simulate("click");
    expect(onFirst).toHaveBeenCalled();
  });

  it("should call onPrior when prior button is click", () => {
    wrapper.find(IconButton).at(PRIOR).simulate("click");
    expect(onPrior).toHaveBeenCalled();
  });

  it("should call onNext when next button is click", () => {
    wrapper.find(IconButton).at(NEXT).simulate("click");
    expect(onNext).toHaveBeenCalled();
  });

  it("should call onLast when last button is click", () => {
    wrapper.find(IconButton).at(LAST).simulate("click");
    expect(onLast).toHaveBeenCalled();
  });

  it("should disable first and prior when offset is 0", () => {
    wrapper.setProps({
      pageInformation: { ...pagniationInfoMocks, offset: 0 },
    });
    expect(wrapper.find(IconButton).at(FIRST).props().disabled).toBe(true);
    expect(wrapper.find(IconButton).at(PRIOR).props().disabled).toBe(true);
  });

  it("should disable next and last when offset is in the last iteration", () => {
    wrapper.setProps({
      pageInformation: {
        ...pagniationInfoMocks,
        offset: pagniationInfoMocks.total - 1,
      },
    });
    expect(wrapper.find(IconButton).at(NEXT).props().disabled).toBe(true);
    expect(wrapper.find(IconButton).at(LAST).props().disabled).toBe(true);
  });
});
