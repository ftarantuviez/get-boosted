import Card, { CardProps } from "@mui/material/Card";
import Paper, { PaperProps } from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
  width: "60%",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

export const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: "10px",
  textAlign: "center",
  minWidth: "130px",
  border: "1px solid #e1e1e1",
}));
