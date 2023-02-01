import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [allData, upDateAllData] = useState([]);

  function DeleteOneData(index) {
    upDateAllData((previous) => {
      return allData.filter((value, i) => {
        return index !== i;
      });
    });
  }
  function updateOneData(data) {
    upDateAllData((prev) => {
      return [...prev, data];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea updateData={updateOneData} />
      <Note allData={allData} deleteData={DeleteOneData} />
      <Footer />
    </div>
  );
}

export default App;
