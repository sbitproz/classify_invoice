import React from "react";
import { shallow } from "enzyme";

// Own
import Pagination from "./Pagination";
import { pagniationInfoMocks } from "./mocks/paginationMocks";
import { testSelector } from "../../../tests/testHelper";
import { PaginationNav } from "./components/PaginationNav";
import { PaginationInfo } from "./components/PaginationInfo";

describe("Pagination", () => {
  let wrapper: any;

  const handlePageChangedMock = jest.fn();
  const testId = "paginator";

  beforeEach(() => {
    wrapper = shallow(
      <Pagination
        pageInformation={pagniationInfoMocks}
        onPageChanged={handlePageChangedMock}
        testId={testId}
      />
    );
  });

  afterEach(() => {
    handlePageChangedMock.mockReset();
  });

  it("should have rendered pagination component", () => {
    expect(wrapper.find(testSelector(testId)).exists()).toBe(true);
  });

  it("should render PaginationInfo", () => {
    expect(wrapper.find(PaginationInfo).exists()).toBe(true);
  });

  it("should render PaginationNav", () => {
    expect(wrapper.find(PaginationNav).exists()).toBe(true);
  });

  it("should call onPageChange when onClickFirst is clicked with calculated offset", () => {
    wrapper.find(PaginationNav).props().onClickFirst();
    expect(handlePageChangedMock).toHaveBeenCalledWith({
      ...pagniationInfoMocks,
      offset: 0,
    });
  });

  it("should call onPageChange when onClickPrior is clicked with calculated offset", () => {
    wrapper.find(PaginationNav).props().onClickPrior();
    expect(handlePageChangedMock).toHaveBeenCalledWith({
      ...pagniationInfoMocks,
      offset: 0,
    });
  });

  it("should call onPageChange when onClickNext is clicked with calculated offset", () => {
    wrapper.find(PaginationNav).props().onClickNext();
    expect(handlePageChangedMock).toHaveBeenCalledWith({
      ...pagniationInfoMocks,
      offset: 26,
    });
  });

  it("should call onPageChange when onClickLast is clicked with calculated offset", () => {
    wrapper.find(PaginationNav).props().onClickLast();
    expect(handlePageChangedMock).toHaveBeenCalledWith({
      ...pagniationInfoMocks,
      offset: 9999974,
    });
  });

  it("should call onPageChange only once when offset doesn't change the successive time", () => {
    wrapper.find(PaginationNav).props().onClickFirst();
    wrapper.setProps({
      pageInformation: { ...pagniationInfoMocks, offset: 0 },
    });
    wrapper.find(PaginationNav).props().onClickFirst();
    expect(handlePageChangedMock).toHaveBeenCalledTimes(1);
  });
});
