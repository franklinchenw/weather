import { FunctionComponent } from "react";
import { UNIT_TYPE } from "../../constants/types";
import {
  getDateTime,
  getTemperatureSign,
  getWindSpeed,
  replaceConditionWithIcon,
} from "../../utils/helper";
import { Card } from "../atoms/Card";

interface ILocationWeatherProps {
  location: string;
  unit: UNIT_TYPE;
  data: any;
}
export const LocationWeather: FunctionComponent<ILocationWeatherProps> = ({
  location,
  unit,
  data,
}) => {
  return (
    <div className="card weather-details-card">
      <div className="weather-card-title">{location}</div>
      <div className="details-card">
        <div className="weather-highlight-row">
          <div>
            <img
              className="highlight-row-icon"
              src={replaceConditionWithIcon(
                data?.weather[0]?.id.toString() || ""
              )}
              alt=""
            />
          </div>
          <div>
            <div className="weather-highlight-row-current-temp">
              {Math.floor(data?.main.temp || 0) + getTemperatureSign(unit)}
            </div>
            <div className="weather-highlight-row-current-desc">
              {data?.weather[0].description}
            </div>
          </div>
        </div>
        <div className="weather-scrollable-row">
          <Card
            title={"WIND"}
            description={getWindSpeed(unit, data?.wind.speed)}
          />
          <Card
            title={"VISIBILITY"}
            description={
              Math.round((data?.visibility || 1) / 1000).toString() + " km"
            }
          />
          <Card
            title={"HUMIDITY"}
            description={(data?.main.humidity || 0) + " %"}
          />
          <Card
            title={"PRESSURE"}
            description={(data?.main.pressure || 0) + " hPa"}
          />
          <Card
            title={"FEELS LIKE"}
            description={
              Math.floor(data?.main.feels_like || 0) + getTemperatureSign(unit)
            }
          />
          <Card
            title={"MAX TEMP"}
            description={
              Math.floor(data?.main.temp_max || 0) + getTemperatureSign(unit)
            }
          />
          <Card
            title={"MIN TEMP"}
            description={
              Math.floor(data?.main.temp_min || 0) + getTemperatureSign(unit)
            }
          />
          <Card
            title={"SUNRISE"}
            description={getDateTime(data?.sys.sunrise)}
          />
          <Card title={"SUNSET"} description={getDateTime(data?.sys.sunset)} />
        </div>
      </div>
    </div>
  );
};
