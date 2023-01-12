import { WEATHER_CONDITION_ID } from "../constants/weatherCondition";
import Sunny from "../assets/Sunny.png";
import Partly_Cloudy from "../assets/Partly_Cloudy.png";
import Rainy from "../assets/Rainy.png";
import Snowy from "../assets/Snowy.png";
import {
  TEMP_SIGN,
  TEMP_SIGNS,
  UNIT_TYPE,
  UNIT_TYPES,
} from "../constants/types";

export const replaceConditionWithIcon = (conditionId: string) => {
  switch (conditionId) {
    case conditionId.match(WEATHER_CONDITION_ID.PARTY_CLOUDY)?.input:
      return Partly_Cloudy;
    case conditionId.match(WEATHER_CONDITION_ID.RAINY)?.input:
      return Rainy;
    case conditionId.match(WEATHER_CONDITION_ID.SNOWY)?.input:
      return Snowy;
    case conditionId.match(WEATHER_CONDITION_ID.SUNNY)?.input:
      return Sunny;
    default:
      return Sunny;
  }
};

export const getTemperatureSign = (unit: UNIT_TYPE): TEMP_SIGN => {
  if (unit === UNIT_TYPES.METRIC) {
    return TEMP_SIGNS.METRIC as TEMP_SIGN;
  } else {
    return TEMP_SIGNS.IMPERIAL as TEMP_SIGN;
  }
};

export const getWindSpeed = (unit: UNIT_TYPE, speed: number) => {
  let km = 0;
  if (unit === UNIT_TYPES.METRIC) {
    km = Math.round(speed * 3.6);
  } else {
    km = Math.round(speed * 1.60934);
  }
  return km.toString() + " km/h";
};

const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const getDateTime = (timeStamp: number) => {
  const date = new Date(timeStamp * 1000);
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes + " " + ampm;
};
