from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from pydantic import BaseModel

from src.mock_database import load_stations, load_station_movements

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

class Station(BaseModel):
    station_id: str
    station_name: str
    journey_id: str
    planned_timestamp: int
    delay: int

@app.get("/")
async def root():
    return "Find stations at /stations"


@app.get("/stations", response_model=List[Station])
async def get_stations(limit: int = Query(10, ge=1, le=100), offset: int = Query(0, ge=0)):
    stations = load_stations()
    movements = load_station_movements()

    combined_data = [{
        "station_id": station["station_id"],
        "station_name": station["station_name"],
        "journey_id": movement["journey_id"],
        "planned_timestamp": movement["planned_timestamp"],
        "delay": movement["delay"]
    } for station in stations for movement in movements if station["station_id"] == movement["station_id"]]

    # Apply pagination
    start_index = offset
    end_index = min(offset + limit, len(combined_data))

    return combined_data[start_index:end_index]



@app.get("/stations/{station_id}", response_model=List[Station])
async def get_station(station_id: str):
    stations = load_stations()
    movements = load_station_movements()
    
    station_list = [{
        "station_id": station["station_id"],
        "station_name": station["station_name"],
        "journey_id": movement["journey_id"],
        "planned_timestamp": movement["planned_timestamp"],
        "delay": movement["delay"]
    } for station in stations for movement in movements if station["station_id"] == station_id and station["station_id"] == movement["station_id"]]
    
    return station_list or [{"error": "Station not found"}]


@app.get("/stations/{station_id}", response_model=List[Station])
async def get_station(station_id: str):
    stations = load_stations()
    movements = load_station_movements()
    
    station_list = [{
        "station_id": station["station_id"],
        "station_name": station["station_name"],
        "journey_id": movement["journey_id"],
        "planned_timestamp": movement["planned_timestamp"],
        "delay": movement["delay"]
    } for station in stations for movement in movements if station["station_id"] == station_id and station["station_id"] == movement["station_id"]]
    
    return station_list or [{"error": "Station not found"}]

@app.put("/stations/{station_id}")
async def update_station(station_id: str, station_data: Station):
    stations = load_stations()
    updated = False
    for station in stations:
        if station["station_id"] == station_id:
            station.update(station_data.dict())
            updated = True
            break
    if not updated:
        raise HTTPException(status_code=404, detail="Station not found")
    return {"message": "Station updated successfully"}


@app.patch("/stations/{station_id}")
async def patch_station(station_id: str, station_data: Station):
    stations = load_stations()
    updated = False
    for station in stations:
        if station["station_id"] == station_id:
            station.update(station_data.dict(exclude_unset=True))
            updated = True
            break
    if not updated:
        raise HTTPException(status_code=404, detail="Station not found")
    return {"message": "Station patched successfully"}

@app.delete("/stations/{station_id}")
async def delete_station(station_id: str):
    stations = load_stations()
    deleted = False
    for idx, station in enumerate(stations):
        if station["station_id"] == station_id:
            del stations[idx]
            deleted = True
            break
    if not deleted:
        raise HTTPException(status_code=404, detail="Station not found")
    return {"message": "Station deleted successfully"}
