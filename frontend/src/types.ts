
export type Station = { station_id: string; station_name: string; latitude: number; longitude: number; };
export type TrainMovement = { journey_id: string; station_id: string; planned_timestamp: number; actual_timestamp: number; event_type: string; delay: number; };

