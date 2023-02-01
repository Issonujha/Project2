import React from "react";

function ListItem(props) {
  return (
    <div
      onClick={() => {
        props.talk(props.id);
      }}
    >
      <li>{props.data}</li>
    </div>
  );
}

export default ListItem;
