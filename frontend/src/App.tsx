import React, { useState, useCallback } from "react";
import "./App.css";
import SelectForm, { SelectOptions } from "./SelectForm";
import TableData from "./TableData";

import { useStationsData } from "./hooks/useStationsData";

function App() {
  const {
    stations,
    setFetchNeeded,
    isLoading: isStationsLoading,
    nextPage,
    prevPage,
    offset,
    isNextDisbaled,
  } = useStationsData();
  const [showTable, setShowTable] = useState<boolean>(false);

  const handleSelectChange = useCallback(
    (value: string) => {
      if (value === SelectOptions.Stations) {
        setFetchNeeded(true);
        setShowTable(true);
      } else if (value === SelectOptions.Add) {
        setShowTable(false);
      }
    },
    [setFetchNeeded]
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo Interview App</h1>
      </header>

      <div className="container">
        <div className="row">
          <SelectForm onSelectChange={handleSelectChange} />

          <TableData
            isNextDisabled={isNextDisbaled}
            nextPage={nextPage}
            prevPage={prevPage}
            offset={offset}
            isLoading={isStationsLoading}
            stations={stations}
            showTable={showTable}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
