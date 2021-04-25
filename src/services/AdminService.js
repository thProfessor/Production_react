import ApiService from "./api";
import { API_ENDPOINT, API_ENDPOINT_2 } from "./baseURL";

const client = new ApiService({ baseURL: API_ENDPOINT });
const JSON_QUERY = ".json?print=pretty";

const client2 = new ApiService({ baseURL: API_ENDPOINT_2 });

export default {
  getStories: async () => {
    return await client.get(`/topstories${JSON_QUERY}`);
  },

  getPosts: async () => {
    return await client2.get(`/posts`);
  },
};
