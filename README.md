# React Programming Keeper Puns App

This is a simple React app that displays programming-related puns.

## Usage

To run this app:

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `npm start` to start the dev server
4. Go to `http://localhost:3000` to view the app

## Dependencies

- React
- ReactDOM

## Structure

- `index.js` - Entry point that renders App component
- `App.js` - Main App component that renders Header, Puns, and Footer
- `Header.js` - Header component
- `Footer.js` - Footer component

The App component maps over the puns array and renders a Pun component for each one, passing the pun info as props.

## Functionality

This app displays a list of programming-related puns with some fake data. Each pun has a title and punchline.

For example:

- "Hardware vs Software" - You can hit your hardware with a hammer, but you can only curse at your software.

- "JavaScript" - Why was the JavaScript developer sad? Because they didn't Node how to Express themselves.

In the future, this could be expanded into a more fully featured pun collection app by adding things like:

- Pun input/editing
- User accounts
- Backend for data persistence
- Search/filter puns

But for now it simply displays some hardcoded pun data in a list.

## License

MIT
