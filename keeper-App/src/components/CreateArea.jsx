import React, { useState } from "react";

function CreateArea(props) {
  const [data, updateData] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    updateData((prev) => {
      if (name === "title") {
        return { title: value, content: prev.content };
      }
      if (name === "content") {
        return { title: prev.title, content: value };
      }
    });
  }

  function onSubmit(event) {
    props.updateData(data);
    updateData({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={data.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={data.content}
        />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
