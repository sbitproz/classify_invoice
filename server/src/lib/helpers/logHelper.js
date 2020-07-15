const pagingConstants = require('../constants/pagingConstants');

const parseLog = (log) => {
  const splitRecord = log.split(' ');
  return {
    dateTime: `${splitRecord[0]} ${splitRecord[1]}`,
    logType: splitRecord[2],
    message: splitRecord.slice(3).join(' ')
  }  
}

const getPagingMeta = (records, paging) => ({
  limit: getPagingLimit(+paging.limit),
  offset: +paging.offset || 0,
  total: records.length
});

const getPagingLimit = (limit) => 
  (limit > pagingConstants.DEFAULT_LOG_LIMIT || !limit) ? pagingConstants.DEFAULT_LOG_LIMIT : limit

const transformLogs = (offset, limit) => (acc, item, index) => {
  const logAsJSON = parseLog(item);
  const newAcc = {
    ...acc,
    counter: {
      ...acc.counter,
      [logAsJSON.logType]: acc.counter[logAsJSON.logType] + 1
    }
  };

  const isRecordInPageView = () => index >= offset && index < offset + limit;
  
  return isRecordInPageView() ? { ...newAcc, logs: [...acc.logs, logAsJSON] } : newAcc;
};

module.exports = {
  transformLogs,
  getPagingMeta
}
