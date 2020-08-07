// @ts-nocheck
import React, { useEffect, useCallback, useState } from "react";

// Own
import { InvoiceTable } from "./components/InvoiceTable";
import { invoicesService } from "./services/invoicesService";
import InvoiceStats from "./components/LogStats/LogStats";
import { Invoice } from "./interfaces/invoicesStateInterfaces";
import { invoiceType } from "./constants/invoicesConstants";

// Styles
import "./Invoices.scss";

const Logs: React.SFC = () => {
  const fetchInvoices = useCallback(() => {
    invoicesService.getInvoices().subscribe((response) => {
      if (response) {
        setSuspectInvoices(response.suspect.data);
        setCorrectInvoices(response.correct.data);
        setErrorInvoices(response.error.data);
      }
    });
  }, []);

  const [view, setView] = useState<string>(invoiceType.suspect);

  const [suspectInvoices, setSuspectInvoices] = useState<Invoice[]>([]);
  const [correctInvoices, setCorrectInvoices] = useState<Invoice[]>([]);
  const [errorInvoices, setErrorInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  const handleUpdateInvoiceCallback = useCallback(
    (invoiceId, errorState) => {
      invoicesService
        .updateInvoice(invoiceId, errorState)
        .subscribe((response) => {
          fetchInvoices();
        });
    },
    [fetchInvoices]
  );

  const getInvoices = () => {
    switch (view) {
      case invoiceType.correct:
        return correctInvoices;
      case invoiceType.error:
        return errorInvoices;
      default:
        return suspectInvoices;
    }
  };

  const handleStatsClick = (type: string) => {
    console.log(type);
    setView(type);
  };

  return (
    <div id="invoices">
      <InvoiceStats
        stats={{
          suspect: suspectInvoices.length,
          correct: correctInvoices.length,
          error: errorInvoices.length,
        }}
        onClick={handleStatsClick}
      />
      {view === invoiceType.suspect && (
        <InvoiceTable
          invoices={getInvoices()}
          onUpdateInvoice={handleUpdateInvoiceCallback}
        />
      )}
    </div>
  );
};

export default Logs;
