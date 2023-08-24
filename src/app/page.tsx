"use client";

import WeatherCard from "@/components/WeatherCard/WeatherCard";
import styles from "./page.module.css";
import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { API_KEY, BASE_URL } from "@/constants/api";
import { ICityForecast } from "@/types/cityForecast";
import { IForecastResponseApi } from "@/types/apiForecast";
import { getCityForecastFormatted } from "@/utils";
import CityForm from "@/components/CityForm/CityForm";

export default function Home() {
  const [cityForecast, setCityForecast] = useState<ICityForecast>(
    {} as ICityForecast
  );
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({
    open: false,
    message: "",
  });

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSnackbarOpen = () => {
    setError({ ...error, open: false });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.get<IForecastResponseApi>(
        `${BASE_URL}?key=${API_KEY}&q=${query}&days=5`
      );
      setLoading(false);
      const formattedData = getCityForecastFormatted(data);
      setCityForecast(formattedData);
    } catch (error) {
      setLoading(false);
      setError({
        message: "There was an error fetching your city",
        open: true,
      });
      setCityForecast({} as ICityForecast);
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
      <Box bgcolor={"white"} p={2} alignItems={"center"} sx={{ mb: 4 }}>
        <Typography variant="h5">Weather App</Typography>
        <CityForm
          onSubmit={onSubmit}
          onQueryChange={onQueryChange}
          loading={loading}
          query={query}
        />
      </Box>
      <WeatherCard cityForecast={cityForecast} />
      <Snackbar
        open={error.open}
        autoHideDuration={6000}
        onClose={handleSnackbarOpen}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarOpen}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error.message}
        </Alert>
      </Snackbar>
    </main>
  );
}
