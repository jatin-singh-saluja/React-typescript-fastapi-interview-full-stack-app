import sys
import os

# Get the current directory of this script
current_dir = os.path.dirname(os.path.realpath(__file__))

# Add the parent directory (which contains main.py) to the Python path
parent_dir = os.path.abspath(os.path.join(current_dir, '..'))
sys.path.append(parent_dir)


from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == "Find stations at /stations"

def test_read_stations():
    response = client.get("/stations")
    assert response.status_code == 200
    assert len(response.json()) > 0

def test_read_station_by_id():
    # Assuming there's at least one station in the database
    response = client.get("/stations")
    stations = response.json()
    assert len(stations) > 0

    # Fetching the first station and querying by its ID
    station_id = stations[0]['station_id']
    response = client.get(f"/stations/{station_id}")
    assert response.status_code == 200
    assert response.json()['station_id'] == station_id
