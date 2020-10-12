# theFeedbackForm.

_Duration: 2 day_

theFeedbackForm is a simple form that allows users to give feedback to an organization. Admin are able to view/delete/flag the data.

## Deployed Version

To see a deployed version of the app, visit [this link](https://limitless-plains-89040.herokuapp.com)

## Installation

Fork and clone the repository to your computer. Use npm to install the dependencies

```bash
npm install
```

Create a database following the instructions in database.sql.

Start the server and client server by running the scripts.

```bash
npm run server
npm run client
```

Open a browser and navigate to localhost:3000

## Usage

To give feedback, click the 'Let's Get Started.' button and answer the prompts by giving a numeric value from 1 (bad) to 5 (great) or by giving an optional comment. Once submitted, users are re-directed to a thank you page and can submit additional feedback. Users are able to toggle light/dark mode for optically-related concerns.

Admin are able to view all data by visiting the /admin (relative) URL. Admin are able to flag and delete data by clicking the respective buttons.

## Technologies

PostgreSQL, PG, Pool, Cors, Express, Node, React, Chakra-UI

## Screenshots

#### Welcome Page:

![image](https://github.com/garrethue/redux-feedback-loop/blob/master/public/images/welcome.png)

#### A Prompt Page:

![image](https://github.com/garrethue/redux-feedback-loop/blob/master/public/images/feelingprompt.png)

#### Review Page:

![image](https://github.com/garrethue/redux-feedback-loop/blob/master/public/images/review.png)

#### Light mode:

![image](https://github.com/garrethue/redux-feedback-loop/blob/master/public/images/lightmode.png)
