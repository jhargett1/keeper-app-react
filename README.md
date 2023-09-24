# Note Taking App

This is a simple note taking app built with React.

![Screenshot 2023-09-23 181054](https://github.com/jhargett1/keeper-app-react/assets/119984652/9aca00f5-0a62-4016-b523-4a577ded8c99)


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

- `index.js` - Entry point that renders App
- `App.js` - Main App component that holds state and logic
- `CreateArea.js` - Form to add new notes
- `Note.js` - Individual note component

The App component manages an array of notes in state. It passes add and delete functions to child components.

## Functionality

This app allows users to add and delete notes.

To add a note, enter a title and content in the form and click "Add". This will add the new note to state in App.js.

To delete a note, click the "Delete" button on the note. This will trigger a delete function in App.js that filters the note out of state.

In the future, this app could be expanded by:

- Adding user accounts
- Storing notes in a database
- Adding rich text editing

But the core functionality is set up - adding and deleting notes.

## License

MIT
