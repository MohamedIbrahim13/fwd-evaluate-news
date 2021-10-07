# Evaluate a news article with Natural Language Processing

This is the final code for the final assessment project for Udacity's Build Tools & Single Page Web Apps Course

## What We will be building

We will be building web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites through meaningcloud API.


## Installation

Below shows how to run in development and production mode.

### run in development mode

` $ npm run build-dev`

### run in production mode

` $ npm run build-prod`

` $ npm run start`

## Configs
Here, we have two webpack config files for both development mode(`webpack.config.dev.js`) and production mode(`webpack.config.prod.js` )

We also have a `package.json` to manage dependencies


## API

The project uses [meaningcloud](https://www.meaningcloud.com/developer/apis).

## Offline Functionality
The project have service workers set up in webpack to provide the offline functionality of our app. When the service worker is functioning correctly, you will see the below message when you inspect the browser.


## Testing

Testing is done with Jest. To run test, use the command 

`npm run test`. 





