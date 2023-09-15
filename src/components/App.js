import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const allNotes = (info) => {
    return (
        <Note
            key={info.key}
            title={info.title}
            content={info.content}
        />
    );
}

const App = () => {
  return (
    <div>
      <Header />
      {notes.map(allNotes)}
      <Footer />
    </div>
  );
}

export default App;
