import { TestScheduler } from "rxjs/testing";

import { logsService } from "./logsService";
import { APIR } from "../../../services/api/apiService";
import { of } from "rxjs";
import { mapTo } from "rxjs/operators";
import { logsResponseMock, apiResponseMock } from "../mocks/logResponseMock";
import { logLimit as limit } from "../constants/logConstants";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("logsService", () => {
  it("should pulse request", () => {
    const getLogsSpy = jest
      .spyOn(logsService, "getLogs")
      .mockImplementation((offset: number) => {
        return of(logsResponseMock);
      });

    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    testScheduler.run(({ expectObservable }) => {
      const foreverStream$ = logsService.pulseLogs(0, 1).pipe(mapTo("a"));
      const unsub = "------ !";
      expectObservable(foreverStream$, unsub).toBe("-aaaaa");
    });
    expect(getLogsSpy).toHaveBeenCalledTimes(5);
  });

  it("should transform response", (done) => {
    const apiGetSpy = jest.spyOn(APIR, "get").mockImplementation(() => {
      return of(apiResponseMock);
    });

    const offset = 0;

    logsService.getLogs(offset).subscribe((response) => {
      expect(response).toBe(apiResponseMock.data);
      expect(apiGetSpy).toHaveBeenCalledWith("logs", {
        params: { offset, limit },
      });
      done();
    });
  });
});
