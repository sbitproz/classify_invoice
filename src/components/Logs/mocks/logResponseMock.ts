export const logsResponseMock = {
  logs: [
    {
      dateTime: "2019-07-30 03:02:20,994",
      logType: "INFO",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      dateTime: "2019-11-02 08:42:17,994",
      logType: "INFO",
      message: "Services",
    },
    {
      dateTime: "2019-11-30 10:15:23,994",
      logType: "ERROR",
      message: "Accounting",
    },
    {
      dateTime: "2019-09-03 22:24:28,994",
      logType: "INFO",
      message: "Sales",
    },
    {
      dateTime: "2020-06-08 04:23:35,994",
      logType: "INFO",
      message: "Human Resources",
    },
    {
      dateTime: "2020-05-02 13:19:02,994",
      logType: "WARNING",
      message: "Sales",
    },
    {
      dateTime: "2019-09-03 22:26:12,994",
      logType: "WARNING",
      message: "Human Resources",
    },
    {
      dateTime: "2020-05-31 06:07:54,994",
      logType: "INFO",
      message: "Accounting",
    },
    {
      dateTime: "2020-04-16 13:38:36,994",
      logType: "ERROR",
      message: "Sales",
    },
    {
      dateTime: "2020-04-12 19:04:36,994",
      logType: "INFO",
      message: "Product Management",
    },
    {
      dateTime: "2020-01-05 06:57:20,994",
      logType: "WARNING",
      message: "Product Management",
    },
    {
      dateTime: "2020-02-24 13:32:10,994",
      logType: "ERROR",
      message: "Research and Development",
    },
    {
      dateTime: "2020-05-27 12:37:20,994",
      logType: "WARNING",
      message: "Human Resources",
    },
    {
      dateTime: "2020-05-31 11:42:17,994",
      logType: "WARNING",
      message: "Research and Development",
    },
    {
      dateTime: "2019-08-17 04:15:32,994",
      logType: "INFO",
      message: "Product Management",
    },
    {
      dateTime: "2020-01-27 23:34:03,994",
      logType: "ERROR",
      message: "Services",
    },
    {
      dateTime: "2019-12-08 04:56:25,994",
      logType: "ERROR",
      message: "Human Resources",
    },
    {
      dateTime: "2020-02-05 19:03:52,994",
      logType: "ERROR",
      message: "Sales",
    },
    {
      dateTime: "2019-07-17 12:03:27,994",
      logType: "WARNING",
      message: "Research and Development",
    },
    {
      dateTime: "2019-11-18 21:28:01,994",
      logType: "WARNING",
      message: "Business Development",
    },
    {
      dateTime: "2019-09-11 22:55:38,994",
      logType: "ERROR",
      message: "Sales",
    },
    {
      dateTime: "2019-12-23 15:48:29,994",
      logType: "WARNING",
      message: "Accounting",
    },
    {
      dateTime: "2020-06-29 04:56:42,994",
      logType: "ERROR",
      message: "Business Development",
    },
    {
      dateTime: "2019-07-26 08:25:19,994",
      logType: "INFO",
      message: "Sales",
    },
    {
      dateTime: "2020-02-23 06:46:09,994",
      logType: "WARNING",
      message: "Engineering",
    },
  ],
  counter: {
    INFO: 32100,
    WARNING: 33400,
    ERROR: 34500,
  },
  pagination: {
    count: 25,
    offset: 1,
    limit: 25,
    total: 9999999,
  },
};

export const apiResponseMock = {
  data: logsResponseMock,
  status: 200,
  statusText: "COMPLETED",
  headers: undefined,
  config: {},
};
