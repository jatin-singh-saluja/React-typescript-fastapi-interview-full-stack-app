import json

def load_stations() -> list[dict]:
    with open('data/stations.json', newline='') as json_file:
        data = json.load(json_file)
        return data

def load_station_movements() -> list[dict]:
    with open('data/station_movements.json', newline='') as json_file:
        data = json.load(json_file)
        return data