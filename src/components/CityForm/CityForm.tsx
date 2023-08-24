import React from "react";
import { Button, CircularProgress, TextField } from "@mui/material";
import styles from "./CityForm.module.css";

type Props = {
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onQueryChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  query: string;
  loading: boolean;
};

const CityForm = (props: Props) => {
  const { onSubmit, query, onQueryChange, loading } = props;
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <TextField
        label="Find your city!"
        value={query}
        onChange={onQueryChange}
        size="medium"
        required
      />
      <Button type="submit" variant="contained" size="large" disabled={loading}>
        {loading ? <CircularProgress size={25} color="info" /> : "Search"}
      </Button>
    </form>
  );
};

export default CityForm;
