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

## Other features to consider

- Progress Bar: this could be used to give the user a richer visual idea of the current pagination position.
- Notification spread or snackbar: this could be used to provide user feedback in the event of slower load times or problems connecting to the API endpoint.




          {/* <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
              <FontAwesomeIcon size="10x" icon={["fas", "coffee"]} />
            <FontAwesomeIcon icon={faCoffee} />
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
            </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
            </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
              <br />
            {'"a benevolent smile"'}
          </Typography> */}