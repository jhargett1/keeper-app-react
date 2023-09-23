import React from "react";

function Note(props) {
  function handleClick() {
    //- Pass a id over to the Note component, pass it back to the App when deleting.
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* - Callback from the Note component to trigger a delete function. */}
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
