# GBST coding challange solution

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), to solve the coding challange provided [GBST]("./Take Home Challenge - React.docx")

## Steps to run the project:

1. first clone the proejct from the repository
2. run `npm run install` to install required depnedencies
3. Run `npm run start` to start the project in developopment mode

# I have used [Tailwind CSS](https://tailwindcss.com/) to style the components as its one of the most widely used and utility first class based CSS framework which allows to style the components using class names.

## Tailwind css makes it excellent choice for responsive design of the components and application as it comes with variety of utility classes and themeing support!

## Home page lists the time-zones in a responsive grid layout with each time-zone as a Card component.

## I have hard coded my API Key for Time-zone api in `fetchTimezones` method on `Homepage.tsx` file for simplicity.

## Each card has two actions

### 1. Click on the `Show time in a Dialog` opens a modal with the time-zone's current time

### 2. Click on the `Show zone details link` Navigates to the timezone's details page, this deails page has everything it need to re-create the state of the page and does not depend on the parent component.

#### I tried to use the [Get time-zone endpoint](https://timeapi.io/docs) to fetch the time-zone's current time, but it was not working as it needs a Longitude / lattitude information which is not availeble from previous API call!

# However, the application meets ALL level 3 the requirements of the challange.

## Learn More about Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
