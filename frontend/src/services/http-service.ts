import apiClient from "./api-client";

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>(limit?: number, offset?: number) {
    const queryParams: { [key: string]: number } = {};

    if (limit !== undefined) {
      queryParams["limit"] = limit;
    }
    if (offset !== undefined) {
      queryParams["offset"] = offset;
    }

    return apiClient.get<T[]>(this.endpoint, {
      params: queryParams,
    });
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
