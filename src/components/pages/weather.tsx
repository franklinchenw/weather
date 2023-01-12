import { useEffect, useState } from "react";
import { HeaderRow } from "../molecules/HeaderRow";
import { FavoriteLocations } from "../molecules/FavoriteLocations";
import { doGetCurrentWeatherData } from "../../apis/weather";
import { LocationWeather } from "../molecules/LocationWeather";
import { mockDefaultLocations } from "../../constants/weatherCondition";
import {
  TEMP_SIGN,
  UNIT_TYPE,
  TEMP_SIGNS,
  UNIT_TYPES,
} from "../../constants/types";
import { getTemperatureSign } from "../../utils/helper";

interface IDefaultLocation {
  name: string;
  conditionId: string;
  selected: boolean;
}

export const Weather = () => {
  const [unit, setUnit] = useState<UNIT_TYPE>(UNIT_TYPES.METRIC as UNIT_TYPE);
  const [tempSign, setTempSign] = useState<TEMP_SIGN>(
    TEMP_SIGNS.METRIC as TEMP_SIGN
  );
  const [selectedLocation, setSelectedLocation] = useState("Toronto, Canada");
  const [defaultLocations, setDefaultLocations] =
    useState<IDefaultLocation[]>(mockDefaultLocations);
  const [weatherData, setWeatherData] = useState<any>();

  useEffect(() => {
    fetchCurrentWeather();
  }, [selectedLocation, unit]);

  const toggleSwitch = (checked: boolean) => {
    if (checked) {
      setUnit(UNIT_TYPES.METRIC as UNIT_TYPE);
    } else {
      setUnit(UNIT_TYPES.IMPERIAL as UNIT_TYPE);
    }
  };

  const selectLocation = (location: string) => {
    setSelectedLocation(location);
  };

  const updateDefaultLocationIcon = (data: {
    name: string;
    weather: { id: string }[];
  }) => {
    // update favorite location icon after api call
    // could have done it with calling multiple apis when application runs
    defaultLocations!.map((location, index) => {
      if (location.name.includes(data.name)) {
        let newLocationList = defaultLocations;
        newLocationList[index].conditionId = data.weather[0].id.toString();
        setDefaultLocations(newLocationList);
      }
    });
  };

  const fetchCurrentWeather = async () => {
    try {
      const data = await doGetCurrentWeatherData(selectedLocation, unit);
      setWeatherData(data.data);
      updateDefaultLocationIcon(data.data);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="weather-container">
      <HeaderRow title={"Weather"} switchOn={toggleSwitch} />
      <div className="body">
        <FavoriteLocations
          selectLocation={selectLocation}
          defaultLocation={defaultLocations!}
        />
        <LocationWeather
          location={selectedLocation}
          data={weatherData}
          unit={unit}
        />
      </div>
    </div>
  );
};
