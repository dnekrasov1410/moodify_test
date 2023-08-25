import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledBlockContainer = styled(Box)({
  background: "rgba(67, 77, 91, 0.2)",
  padding: "1vh 1vw",
  borderRadius: 16,
  color: "rgb(240, 247, 255)",
});

export const StyledSongItemContainer = styled(StyledBlockContainer)({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  background: "",
  button: { display: "none" },
  "&:hover": {
    opacity: 0.7,
    button: {
      display: "flex",
      color: "white",
    },
  },
});

export const StyledTitleContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const StyledDurationBlock = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "auto",
});

export const StyledArtistName = styled(Box)({
  h4: { margin: 0 },
});
export const StyledSongName = styled(Box)({
  fontSize: 14,
  color: "#B0B8C4",
});

export const StyledActionContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});
