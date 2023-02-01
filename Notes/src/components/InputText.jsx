import React, { useState } from "react";

function InputText(props) {
  const [data, updateData] = useState("");

  function update(events) {
    updateData(events.target.value);
  }
  return (
    <div className="form">
      <input type="text" onChange={update} value={data} />
      <button
        onClick={() => {
          props.onClick(data);
          updateData("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputText;
