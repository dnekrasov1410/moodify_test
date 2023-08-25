import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { StyledCommonBlockContainer } from "../../styles";

export const StyledSongItemContainer = styled(StyledCommonBlockContainer)({
  position: "relative",
  display: "flex",
  flexDirection: "row",
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
