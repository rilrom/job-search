# Job Search

Search for jobs from an external API consisting of mock data.

## Project Status

This project is currently in development. Users can search by keyword to find results. Additional filters and authentication features are in progress.

## Installation and Setup Instructions

Clone this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`  

To start server:

`npm start`  

To visit app:

`http://localhost:3000`

## Reflection

This project was to familiarize myself with typescript and @reduxjs/toolkit.

Originally the application used a real-life external API source that contained job listings. For simplicity sake the app now uses mock data created in-house using next.js API routes.

One of the main challenges was ensuring redux-toolkit types were handled correctly. This required careful consideration of the developer documentation.