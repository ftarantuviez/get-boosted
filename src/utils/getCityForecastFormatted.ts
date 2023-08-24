import { IForecastResponseApi } from "@/types/apiForecast";
import { IForecastDay } from "@/types/cityForecast";

export const getCityForecastFormatted = (data: IForecastResponseApi) => {
  const { location, forecast, current } = data;

  let forecastDay: IForecastDay[] = [];
  forecast.forecastday.forEach((forec) => {
    forecastDay.push({
      date: forec.date,
      avgHumidity: forec.day.avghumidity,
      avgTempCelsius: forec.day.avgtemp_c,
      minTempCelsius: forec.day.mintemp_c,
      maxTempCelsius: forec.day.maxtemp_c,
      condition: {
        text: forec.day.condition.text,
        icon: forec.day.condition.icon,
      },
    });
  });

  return {
    location: {
      country: location.country,
      name: location.name,
      region: location.region,
      timezone: location.tz_id,
      time: location.localtime,
    },
    current: {
      condition: current.condition,
      humidity: current.humidity,
      tempCelsius: current.temp_c,
    },
    forecastDay,
  };
};
