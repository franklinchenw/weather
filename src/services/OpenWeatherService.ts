import { makeAPICall } from "../apis/axios";
import { config } from "../../config/config.dev";
export default class OpenWeatherService {
  //https://api.openweathermap.org/data/2.5/weather?q=London,ca&appid=d11d34b38d013ce1fc908bcc04a87e6b
  async getCurrentWeatherData(
    city: string,
    unit: "metric" | "imperial" = "metric"
  ) {
    return await makeAPICall(
      `weather?q=${city}&appid=${config.OpenWeatherApi.apiKey}&&units=${unit}`,
      "GET"
    );
  }

  hourlyForecast4Days() {}

  dailyForecast16days() {}
}
