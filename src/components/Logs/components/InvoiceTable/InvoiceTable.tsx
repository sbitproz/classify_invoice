// @ts-nocheck
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

// Own
import { tableMeta, TYPE_DATE, TYPE_BOOLEAN, TYPE_CURRENCY, FIELD_ID } from '../../constants/invoicesConstants';
import { Invoice } from '../../interfaces/invoicesStateInterfaces';
import { readableDate } from '../../../../helpers/dateHelper';

// Styles
import './InvoiceTable.scss';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface InvoiceTableProps {
  invoices: Invoice[];
  onUpdateInvoice: (invoiceId: number, errorState: number) => {};
}

const InvoiceTable: React.SFC<InvoiceTableProps> = ({ invoices, onUpdateInvoice }) => {
  const classes = useStyles();

  const getValue = (value, fieldMeta) => {
    switch (fieldMeta.type) {
      case TYPE_DATE:
        return readableDate(value);
      case TYPE_BOOLEAN:
        return value === true ? 'Yes' : 'No';
      case TYPE_CURRENCY:
        return `£${value}`;

      default:
        return value;
    }
  }

  return (
    <div id='invoiceTable'>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.keys(tableMeta).map(key => (
                <>
                  {
                    tableMeta[key].visible &&
                    <TableCell key={key}>{tableMeta[key].caption}</TableCell>
                  }
                </>
              ))}
              <TableCell key={`header-action-correct`}></TableCell>
              <TableCell key={`header-action-error`}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((row, idx) => (
              <TableRow key={`data-row-${idx}`}>
                {Object.keys(tableMeta).map(key => (
                  <>
                    {
                      tableMeta[key].visible &&
                      <TableCell key={`cell-${key}-row-${idx}`}>
                        {getValue(row[tableMeta[key].field], tableMeta[key])}
                      </TableCell>
                    }
                  </>
                ))}
                <TableCell key={`row-${idx}-action-correct`}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    onClick={() => onUpdateInvoice(row[FIELD_ID], 3)}
                  />
                </TableCell>
                <TableCell key={`row-${idx}-action-error`}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => onUpdateInvoice(row[FIELD_ID], 2)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default memo(InvoiceTable);
