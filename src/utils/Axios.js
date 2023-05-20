import axios from "axios";

export const Api = axios.create(
    {
        baseURL: "https://jsonplaceholder.typicode.com/"
    }
);

// get api function is use other compponent
export async function get(url, config = {}) {
    return await Api
      .get(url, { ...config })
      .then((response) => response.data);
  }