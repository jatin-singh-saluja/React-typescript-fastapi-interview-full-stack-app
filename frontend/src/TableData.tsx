import React from "react";
import { Station } from "./services/station-service";

interface TableDataProps {
  stations: Station[];
  showTable: boolean;
  isLoading: boolean;
  nextPage: () => void;
  prevPage: () => void;
  offset: number;
  isNextDisabled: boolean;
}

const TableData: React.FC<TableDataProps> = ({
  stations,
  showTable,
  isLoading,
  prevPage,
  nextPage,
  offset,
  isNextDisabled,
}) => {
  return (
    <div className="col-sm offset-md-2">
      {isLoading && <div>Loading...</div>}
      {showTable && !isLoading && (
        <>
          <div className="row">
            <div className="col">Station Name</div>
            <div className="col">Journey ID</div>
            <div className="col">Planned</div>
            <div className="col">Delay</div>
          </div>
          <hr />
          {stations.map((station) => (
            <div key={station.station_id} className="row">
              <div className="col">{station.station_name}</div>
              <div className="col">{station.journey_id}</div>
              <div className="col">{station.planned_timestamp}</div>
              <div className="col">{station.delay}</div>
            </div>
          ))}
          <div>
            <button onClick={prevPage} disabled={offset === 0}>
              Previous Page
            </button>
            <button onClick={nextPage} disabled={isNextDisabled}>
              Next Page
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TableData;
