import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function subbmitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    restartArea();
  }

  function restartArea() {
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={changeHandler}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows="3"
          onChange={changeHandler}
        />
        <button onClick={subbmitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
