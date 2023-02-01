import React, { useState } from "react";
import ListItem from "./ListItem";
import InputText from "./InputText";

function App() {
  const [array, updateArray] = useState([]);

  function changeArray(data) {
    updateArray((prev) => [...prev, data]);
  }

  function Delete(id) {
    updateArray((previous) => {
      return array.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputText onClick={changeArray} />
      <div>
        <ul>
          {array.map((perItem, index) => (
            <ListItem key={index} id={index} data={perItem} talk={Delete} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
