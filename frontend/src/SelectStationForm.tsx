import { Station } from "./services/station-service";

import React from "react";

interface SelectStationFormProps {
  onSelectChange: (value: string) => void;
  stations: Station[];
}

const SelectStationForm: React.FC<SelectStationFormProps> = ({
  onSelectChange,
  stations,
}) => {
  return (
    <div>
      <select onChange={(e) => onSelectChange(e.target.value)}>
        <option value="">Select Option</option>
        <option value="Stations">Show Stations</option>
        <option value="Add">Add Station</option>
      </select>
      {stations.length > 0 && (
        <select onChange={(e) => onSelectChange(e.target.value)}>
          {stations.map((station, index) => (
            <option key={index} value={station.station_name}>
              {station.station_name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SelectStationForm;
