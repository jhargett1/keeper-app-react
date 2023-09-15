import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// const createNotes = (info) => (
//         <Note
//             key={info.key}
//             title={info.title}
//             content={info.content}
//         />
//     );

const App = () => {
  return (
    <div>
      <Header />
      {notes.map((info) => (
        <Note key={info.key} title={info.title} content={info.content} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
