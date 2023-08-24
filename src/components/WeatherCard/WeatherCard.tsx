/* eslint-disable @next/next/no-img-element */
import { ICityForecast } from "@/types/cityForecast";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import { EmptyState } from "../EmptyState/EmptyState";

type Props = {
  cityForecast: ICityForecast;
};

const WeatherCard = (props: Props) => {
  const {
    cityForecast: { forecastDay, current, location },
  } = props;

  return (
    <Card>
      <CardContent>
        {location?.name ? (
          <>
            <Box display="flex" flexDirection={"column"} alignItems={"center"}>
              <img src={current.condition.icon} alt="" />
              <Typography variant="h5">
                {location.name}, {location.country}
              </Typography>
              <Typography variant="h3" color="#1976d2">
                {current.tempCelsius}°
              </Typography>
              <Typography variant="body1">{current.condition.text}</Typography>
              <Typography variant="body1">H: {current.humidity}°</Typography>
            </Box>
            <Divider sx={{ m: 3 }} />
            <Box display="flex">
              {forecastDay.map((forecast) => (
                <Box
                  key={forecast.date}
                  border="1px solid #e2e2e2"
                  borderRadius={"8px"}
                  display="flex"
                  flexDirection={"column"}
                  alignItems={"center"}
                  width={"120px"}
                  mr={2}
                  p={2}
                >
                  <img src={forecast.condition.icon} alt="" />
                  <Typography variant="h6" color="#1976d2">
                    {forecast.avgTempCelsius}°
                  </Typography>
                  <Typography variant="body1">
                    {forecast.condition.text}
                  </Typography>
                  <Typography variant="body1">
                    H: {forecast.avgHumidity}°
                  </Typography>
                  <Typography sx={{ mt: 4 }} color="gray">
                    0{new Date(forecast.date).getMonth() + 1}/
                    {new Date(forecast.date).getUTCDate()}
                  </Typography>
                </Box>
              ))}
            </Box>
          </>
        ) : (
          <Box display="flex" flexDirection="column" alignItems={"center"}>
            <EmptyState />
            <Typography>Search the city you wanna know the weather</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
