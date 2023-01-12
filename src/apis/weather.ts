import { UNIT_TYPE } from "../constants/types";
import OpenWeatherService from "../services/OpenWeatherService";

const doGetCurrentWeatherData = (
  city: string,
  unit?: UNIT_TYPE
) => {
  return new OpenWeatherService().getCurrentWeatherData(city, unit);
};

export { doGetCurrentWeatherData };
