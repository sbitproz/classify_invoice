const fs = require("fs");
const { initialResponseBodyState } = require('../lib/constants/logsConstants');
const { transformLogs, getPagingMeta } = require('../lib/helpers/logHelper');
const logConstants = require('../lib/constants/logsConstants');

const getLogs = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const file = fs.readFileSync(`./${logConstants.logPath}`, 'utf8');
  const records = file.split('\n');

  const { limit, offset, total } = getPagingMeta(records, req.query);

  const responseBody = records.reduce(transformLogs(offset, limit), initialResponseBodyState);

  const count = responseBody.logs.length;

  const response = {
    ...responseBody,
    pagination: {
      count,
      offset,
      limit,
      total
    }
  }

  res.end(JSON.stringify(response));
};

module.exports = { getLogs };