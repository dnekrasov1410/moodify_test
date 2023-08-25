import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledWrapper = styled(Box)({
  background: "rgb(20, 26, 31)",
  width: "96vw",
  minHeight: "96vh",
  padding: "2vh 2vw",
  display: "flex",
  gap: "1vw",
});

const StyledBlockContainer = styled(Box)({
  background: "rgba(67, 77, 91, 0.2)",
  padding: "2vh 2vw",
  borderRadius: 16,
  color: "rgb(240, 247, 255)",
});

export const StyledMainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 10,
  gap: "2vh",
  height: "96vh",
});

export const StyledHeader = styled(StyledBlockContainer)({});

export const StyledContent = styled(StyledBlockContainer)({
  background: "none",
  padding: 0,
  flex: 1,
  display: "flex",
  flexDirection: "row",
  gap: "2vw",
  height: "100%",
  overflow: "hidden",
});

export const StyledContentItem = styled(StyledBlockContainer)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "2vh",
  overflow: "hidden",
});
