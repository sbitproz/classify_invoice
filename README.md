# Kick Starter

# Gettings started

## Install NPM Packages

- Go to the root directory structure and run `npm i`

## npm start

Runs the React App in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

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

## Create React App as a Kick Starter 

Create React App was considered the best option for this challenge

- The application is single page and self contained on the frontend
- The application relies on server APIs
- You want to experiment or get started with a quick React project 
- Provides a lot of value out of the box

## Folder Architecture:

This is a small project but still has enough components to utilise a domain folder structure.  By abstracting out reuseable components, I have focused on 2 key component domains common and Invoices.  The folder structure will be similar to the following:

```
components
|  +-- Invoices
|     +-- components
|         +-- InvoiceStats
|         +-- InvoiceTable
|         +-- interfaces
|         +-- services
|         +-- Invoices.txs
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

## Husky Prettier 

Husky hooks and prettier have been utilised to trigger automated code formatting during the `git commit` sequence.  Unified code format is a positive factor for code maintainability and team scalability.

Before the `git push` event, Husky runs the unit tests to ensure nothing broken gets committed to the repository.
