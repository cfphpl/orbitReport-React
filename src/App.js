import React, { useState } from "react";
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import satData from "./components/satData";

function App() {
  const [sat, setSat] = useState(satData);

  const displaySats = [...new Set(satData.map((data) => data.orbitType ))];

  const filterByType= (currentType) => {
    const filteredSat = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSat);
  };

  return (
    <div className="App">
      <Banner />
      <Buttons filterByType={filterByType} setSat={setSat} displaySats={displaySats} />
      <Table sat={sat}/>
    </div>
  );
}

export default App;
