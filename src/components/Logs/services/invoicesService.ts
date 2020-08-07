import { tap, catchError } from "rxjs/operators";
import { of, forkJoin } from "rxjs";
import { APIR } from "../../../services/api/apiService";
import { Invoice } from "../interfaces/invoicesStateInterfaces";

const endpoint = 'invoice/';

const getInvoices = () => {
  const endpointGroup = {
    suspect: APIR.get<Invoice>(`${endpoint}?error_state=1`),
    error: APIR.get<Invoice>(`${endpoint}?error_state=2`),
    correct: APIR.get<Invoice>(`${endpoint}?error_state=3`),
  }

  return forkJoin(endpointGroup).pipe(
    tap(() => console.log(`request made ${new Date()}`)),
    catchError((e) => {
      console.error(`An error occurred when trying to retrieve log data: ${e}`);
      return of(undefined);
    })
  );
}

const updateInvoice = (invoiceId: number, error_state: number) => 
  APIR.patch<Invoice>(`${endpoint}${invoiceId}/`, {error_state})


export const invoicesService = {
  getInvoices,
  updateInvoice
};
