export interface ILocation {
  time: string;
  name: string;
  region: string;
  timezone: string;
  country: string;
}

export interface IForecastDay {
  date: string;
  avgHumidity: number;
  avgTempCelsius: number;
  minTempCelsius: number;
  maxTempCelsius: number;
  condition: {
    text: string;
    icon: string;
  };
}

export interface ICurrentForecast {
  humidity: number;
  tempCelsius: number;
  condition: {
    text: string;
    icon: string;
  };
}

export interface ICityForecast {
  current: ICurrentForecast;
  forecastDay: IForecastDay[];
  location: ILocation;
}
