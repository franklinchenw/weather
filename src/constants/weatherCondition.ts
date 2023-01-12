// Provided by https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
// should have a list of codes instead of giving regex
export const WEATHER_CONDITION_ID = {
  PARTY_CLOUDY: "(80[1-9]|8[1-9]d)$",
  RAINY: "(50[0-9]|5[1-9]d)$",
  SNOWY: "(60[0-9]|6[1-9]d)$",
  SUNNY: "800",
  UNKNOWN: "UNKNOWN",
};

export const WEATHER_CONDITION = {
  PARTY_CLOUDY: "801",
  RAINY: "500",
  SNOWY: "600",
  SUNNY: "800",
  UNKNOWN: "0",
};

// mock data
export const mockDefaultLocations = [
  {
    conditionId: WEATHER_CONDITION.RAINY,
    name: "Toronto, Canada",
    selected: true,
  },
  {
    conditionId: WEATHER_CONDITION.PARTY_CLOUDY,
    name: "Ottawa, Canada",
    selected: false,
  },
  {
    conditionId: WEATHER_CONDITION.SNOWY,
    name: "Montreal, Canada",
    selected: false,
  },
  {
    conditionId: WEATHER_CONDITION.SUNNY,
    name: "Vancouver, Canada",
    selected: false,
  },
  {
    conditionId: WEATHER_CONDITION.PARTY_CLOUDY,
    name: "London, Canada",
    selected: false,
  },
  {
    conditionId: WEATHER_CONDITION.SUNNY,
    name: "New York, America",
    selected: false,
  },
  {
    conditionId: WEATHER_CONDITION.PARTY_CLOUDY,
    name: "Los Angeles, America",
    selected: false,
  },
  {
    conditionId: WEATHER_CONDITION.RAINY,
    name: "Chicago, America",
    selected: false,
  },
];
