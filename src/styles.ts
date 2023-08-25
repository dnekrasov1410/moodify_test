import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const appStyles = {
  _bgColors: { main: "rgb(20, 26, 31)", secondary: "rgba(67, 77, 91, 0.7)" },
  _borders: { main: "2px solid rgba(67, 77, 91, 0.2)", mainRadius: 16 },
  _paddings: { main: "2vh 2vw", sm: "1vh 1vw" },
  _gaps: {
    main: {
      horizontal: "1vw",
      vertical: "2vh",
    },
    sm: { horizontal: "1vw", vertical: "1vh" },
  },
};

export const StyledCommonBlockContainer = styled(Box)({
  background: "rgba(67, 77, 91, 0.2)",
  padding: "2vh 2vw",
  borderRadius: 16,
  color: "rgb(240, 247, 255)",
});

export const StyledEmptyStateContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});
