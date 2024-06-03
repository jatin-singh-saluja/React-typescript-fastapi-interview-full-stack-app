import create from "./http-service";

export interface Station {
  station_id: string;
  station_name: string;
  journey_id: string;
  planned_timestamp: number;
  delay: number;
}

export default create("/stations");
