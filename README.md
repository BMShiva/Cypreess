# Web Automation

## Contents

- [Web Automation](#web-automation)
  - [Contents](#contents)
  - [Dev Setup](#dev-setup)
  - [Running from terminal](#running-from-terminal)
  - [Running tests in CI](#running-tests-in-ci)
  - [VS code extensions](#vs-code-extensions)

## Dev Setup

1. Install node (v15.14.0)
2. Install cypress: `npm install cypress --save-dev`
3. Install Xpath dependecny : `npm install -D cypress-xpath`
4. Install cucumber dependency : `npm install --save-dev cypress-cucumber-preprocessor`
5. Install cucumber multiple reporter: `npm install multiple-cucumber-html-reporter`
6. Install mocha : `npm install mocha --save-dev`

## Running from terminal

-   To run from terminal using runner UI: `./node_modules/.bin/cypress open`
-   To run entire suite in headless mode: `npm run uat:headless`
-   In headed mode: `npm run uat:headed`

## Running tests in CI

-   Command:

    `npm run clean:reports && ./node_modules/.bin/cypress-tags run --browser chrome --config baseUrl=https://web.bookmypagar.com/ --env TAGS='@sanity',apiurl=https://api.bookmypagar.com/`

-   Explanation:
    -   TAGS:
    -   browser:
    -   baseUrl:
    -   env
        -   apiurl

## VS code extensions

-   Prettier
-   Live server (to open reports)
-   Cucumber (Gherkin) Full Support
-   Markdown All in One (optional)
