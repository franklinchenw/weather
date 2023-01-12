import { FunctionComponent, useEffect, useState } from "react";
import { WEATHER_CONDITION } from "../../constants/weatherCondition";
import { replaceConditionWithIcon } from "../../utils/helper";

interface IFavoriteLocationState {
  conditionId: string;
  name: string;
  selected: boolean;
}

interface IFavoriteLocationProps {
  selectLocation: (selectedLocation: string) => void;
  defaultLocation: {
    name: string;
    conditionId: string;
    selected: boolean;
  }[];
}

export const FavoriteLocations: FunctionComponent<IFavoriteLocationProps> = ({
  selectLocation,
  defaultLocation,
}) => {
  const [favoriteLocations, setFavoriteLocations] = useState<
    IFavoriteLocationState[]
  >([]);

  useEffect(() => {
    setDefaultFavoriteLocation();
  }, [defaultLocation]);

  const setDefaultFavoriteLocation = () => {
    setFavoriteLocations(defaultLocation);
  };

  const chooseLocation = (index: number, name: string) => {
    favoriteLocations.map((location) => (location.selected = false));
    favoriteLocations[index].selected = true;
    setFavoriteLocations([...favoriteLocations]);
    selectLocation(name);
  };

  return (
    <div className="card favorite-location-card">
      <div className="weather-card-title favorite-sub-title">Favorite Locations</div>
      <div className="favorite-list">
        {favoriteLocations.map((location, index) => (
          <div
            className={
              location.selected
                ? "favorite-list-item active"
                : "favorite-list-item"
            }
            onClick={() => chooseLocation(index, location.name)}
          >
            <img
              className="icon"
              src={replaceConditionWithIcon(location.conditionId)}
              alt=""
            />
            <div>{location.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
