import { useState, useEffect } from "react";
import stationService, { Station } from "../services/station-service";

export function useStationsData() {
  const [stations, setStations] = useState<Station[]>([]);
  const [fetchNeeded, setFetchNeeded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNextDisbaled, setIsNextDisabled] = useState<boolean>(false);

  const pageLimit = 10;
  const [offset, setOffset] = useState<number>(0); // Number of items to skip

  useEffect(() => {
    if (fetchNeeded) {
      const fetchStations = async () => {
        setIsLoading(true);
        try {
          const response = await stationService.getAll<Station>(
            pageLimit,
            offset
          );
          if (response.data.length === 0) {
            setIsNextDisabled(true);
            return;
          }
          setIsNextDisabled(false);
          setStations(response.data);
        } catch (error) {
          console.error("Error fetching stations:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchStations();
    }
  }, [fetchNeeded, offset]);

  const nextPage = () => {
    setOffset(offset + pageLimit); // Move to the next page by increasing offset
  };

  const prevPage = () => {
    setOffset(Math.max(0, offset - pageLimit)); // Move to the previous page by decreasing offset
  };

  return {
    stations,
    fetchNeeded,
    setFetchNeeded,
    isLoading,
    nextPage,
    prevPage,
    offset,
    isNextDisbaled,
  };
}
