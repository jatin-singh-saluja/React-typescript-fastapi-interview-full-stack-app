import React from "react";

export enum SelectOptions {
  Add = "Add",
  Real = "Real",
  Stations = "Stations",
  Here = "Here",
}

interface SelectFormProps {
  onSelectChange: (value: string) => void;
}

const SelectForm: React.FC<SelectFormProps> = ({ onSelectChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectChange(event.target.value);
  };

  return (
    <div className="col-sm-2">
      <form>
        <div className="form-group">
          <select
            className="form-control"
            id="stationSelect"
            onChange={handleSelectChange}
          >
            {Object.values(SelectOptions).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default SelectForm;
