/* eslint-disable @next/next/no-img-element */
import { ICityForecast } from "@/types/cityForecast";
import { Box, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import { EmptyState } from "../EmptyState/EmptyState";
import { StyledCard, StyledPaper } from "./WeatherCard.styles";

type Props = {
  cityForecast: ICityForecast;
};

const WeatherCard = (props: Props) => {
  const {
    cityForecast: { forecastDay, current, location },
  } = props;

  return (
    <StyledCard>
      <CardContent>
        {location?.name ? (
          <>
            <Box display="flex" flexDirection={"column"} alignItems={"center"}>
              <img src={current.condition.icon} alt="" />
              <Typography variant="h3" color="#1976d2">
                {current.tempCelsius}°
              </Typography>
              <Typography variant="h5">
                {location.name}, {location.country}
              </Typography>
              <Typography variant="body1">{current.condition.text}</Typography>
              <Typography variant="body1">H: {current.humidity}°</Typography>
            </Box>
            <Divider sx={{ m: 3 }} />
            <Box
              display="flex"
              justifyContent={"space-evenly"}
              overflow="scroll"
            >
              {forecastDay.map((forecast) => (
                <StyledPaper key={forecast.date}>
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
                  <Typography variant="body1">
                    Min: {forecast.minTempCelsius}°
                  </Typography>
                  <Typography variant="body1">
                    Max: {forecast.maxTempCelsius}°
                  </Typography>
                  <Typography sx={{ mt: 4 }} color="gray">
                    0{new Date(forecast.date).getMonth() + 1}/
                    {new Date(forecast.date).getUTCDate()}
                  </Typography>
                </StyledPaper>
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
    </StyledCard>
  );
};

export default WeatherCard;
