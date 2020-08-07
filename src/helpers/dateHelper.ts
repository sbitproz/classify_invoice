import moment from 'moment';

export const dateUDF = "YYYY-MM-DD";

export const standardFormat = "DD/MM/YYYY";

export const readableDate = (date: string) => moment(date, dateUDF).format(standardFormat);
