import React from "react";

function Note(props) {
  return props.allData.map((element, index) => {
    return (
      <div className="note">
        <h1>{element.title}</h1>
        <p>{element.content}</p>
        <button
          onClick={() => {
            props.deleteData(index);
          }}
        >
          DELETE
        </button>
      </div>
    );
  });
}

export default Note;
