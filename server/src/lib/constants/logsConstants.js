const logPath = '/logs/LogMessages.csv';

const initialResponseBodyState = {
  logs: [],
  counter: {
    INFO: 0,
    WARNING: 0,
    ERROR: 0
  }
}

module.exports = { 
  logPath, 
  initialResponseBodyState 
};
