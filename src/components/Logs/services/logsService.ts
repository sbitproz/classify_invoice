import { tap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { APIR } from "../../../services/api/apiService";

const getLogs = () =>
  APIR.get<any>("logs").pipe(
    tap(() => console.log(`request made ${new Date()}`)),
    catchError((e) => {
      console.error(`An error occurred when trying to retrieve log data: ${e}`);
      return of(undefined);
    })
  );

export const logsService = {
  getLogs,
};
