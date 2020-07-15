# Asset Control Challenge

This project is a solution provided for the Asset Control challenge.

# Gettings started

## Install NPM Packages

- Go to the root directory structure and run `npm i`
- Go to the root/server directory structure and run `npm i`

## npm run start:clientserver

Runs both the React App and the Express Server using concurrently

## npm start

Runs the React App in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## npm run start:server

Runs the express server.  Use Postman or your favourite API testing tool and send a request to [http://localhost:3005](http://localhost:3005).  Query search params options include `offset` and `limit`.  The server provides a maximum limit of 25 logs per page.

## npm run build

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## npm run test

Launches the test runner in the interactive watch mode.<br />

## npm run test:coverage

Launches the test runner coverage generator.<br />

## npm run test:debug

Launches the test runner in debug mode.<br />

# Design Considerations

## Basic UI design

Guiding design completed using Adobe XD the brief is outlined: <a target="_blank" href="https://xd.adobe.com/view/95f2db46-71fc-47dc-b3fc-6c0575721340-c0a1/">XD</a>

## Create React App as a Kick Starter 

Create React App was considered the best option for this challenge

- The application is single page and self contained on the frontend
- The application relies on server APIs
- You want to experiment or get started with a quick React project 
- Provides a lot of value out of the box

## Backend Server

The backend server is a simple node express server.  It can be found in the `server` directory.  This API server has the following objectives:

- consumes a mocked log file
- parses the log file into a JSON structure
- calculate log type statistics
- provide a JSON log response based on pagination rules to an endpoint

### Performance

To improve performance statistics and parsing are calculated and processed in a single loop.  **event-stream** [https://www.npmjs.com/package/event-stream] would be a better solution for large log files.  Please find performance benchmarks here: https://itnext.io/streams-for-the-win-a-performance-comparison-of-nodejs-methods-for-reading-large-datasets-pt-2-bcfa732fa40e.

Both string functions and regex were considered for capturing data from the log file.  String functions won on performance and were utilised. https://www.measurethat.net/Benchmarks/Show/1557/0/regex-vs-splitjoin https://stackoverflow.com/questions/966697/performance-question-string-split-and-then-walk-on-the-array-or-regexp.

## Folder Architecture:

This is a small project but still has enough components to utilise a domain folder structure.  By abstracting out reuseable components, I have focused on 2 key component domains common and logs.  The folder structure will be similar to the following:


```
components
|  +-- Logs
|     +-- components
|         +-- LogStats
|         +-- LogTable
|         +-- interfaces
|         +-- services
|         +-- Logs.txs
|         +-- index.ts
|  +-- common
|     +-- Heading
|     +-- IconButton
|     +-- Pagination
|     +-- StatsCard
|     +-- Table
+-- interfaces
+-- services
+-- styles
App.tsx
```

I have employed barrel files to improve the import strings.  This could be further improved by using alias.

## Observable pattern

I have leveraged rxjs, a popular functional library for switchMap observables (with the potential of cancellation), timer based iterations and plucking data from returned structure.  I have used this with Axios Observable to make API request which works well with rxjs.

## Consideration for Context API

Initially I considered using the Context API in the Log domain.  However with only a single level of depth in that feature, it seemed like an extra level of unnecessary complexity.

## Husky Prettier 

Husky hooks and prettier have been utilised to trigger automated code formatting during the `git commit` sequence.  Unified code format is a positive factor for code maintainability and team scalability.

Before the `git push` event, Husky runs the unit tests to ensure nothing broken gets committed to the repository.

## Quality Gates

Jest has some useful settings for quality gates and minimum coverage requirements.  This has been set at 80% coverage for all aspects of the code in the package.json file.

## Log file

The log viewer refreshes every 5 seconds, so any changes to the source log file will be reflected in the UI within a 5 second time frame.  The log file can be found under `/server/logs/LogMessages.csv`.  

The log file was generated using random times in the date time column, unfortunately ordering the times weren't undertaken as part of this app development.

## Other features to consider

- Progress Bar: this could be used to give the user a richer visual idea of the current pagination position.
- Notification spread or snackbar: this could be used to provide user feedback in the event of slower load times or problems connecting to the API endpoint.
