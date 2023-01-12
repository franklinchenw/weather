import axios from "axios";
import { config } from "../../config/config.dev";

/**
 * Utility function for making the http request
 * @param url
 * @param method
 * @param data
 */
export const makeAPICall = async (
  url: string,
  method: "GET" | "POST",
  data?: {}
) => {
  try {
    const result = await axios
      .create({
        baseURL: config.OpenWeatherApi.apiUrl,
      })
      .request({
        url,
        method,
        headers: {
          "Content-Type": "application/json",
        },
        data,
      });
    return {
      data: result.data,
      status: result.status,
    };
  } catch (err) {
    console.warn(`makeAPICall occurs error - ${url}(${err})`);
    throw err;
  }
};
