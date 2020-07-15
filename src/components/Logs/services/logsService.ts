import { tap, switchMap, pluck, catchError } from "rxjs/operators";
import { interval, of } from "rxjs";
import { APIR } from "../../../services/api/apiService";
import { LogsResponse } from "../interfaces/logsStateInterfaces";
import { logLimit } from "../constants/logConstants";

const requestFrequencyMS = 5000;

const pulseLogs = (offset: number, frequencySeconds: number) =>
  interval(frequencySeconds).pipe(switchMap(() => logsService.getLogs(offset)));

const getLogs = (offset: number) =>
  APIR.get<LogsResponse>("logs", {
    params: { offset, limit: logLimit },
  }).pipe(
    tap(() => console.log(`request made ${new Date()}`)),
    pluck("data"),
    catchError((e) => {
      console.error(`An error occurred when trying to retrieve log data: ${e}`);
      return of(undefined);
    })
  );

export const logsService = {
  pulseLogs,
  getLogs,
  requestFrequencyMS,
};
