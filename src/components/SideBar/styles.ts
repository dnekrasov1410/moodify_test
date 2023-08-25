import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({
  background: "rgba(67, 77, 91, 0.2)",
  padding: "2vh 2vw",
  borderRadius: 16,
  color: "rgb(240, 247, 255)",
});

export const StyledSideMenuWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 2,
  height: "96vh",
});

export const StyledMenuTitle = styled(StyledBox)({
  borderRadius: "16px 16px 0 0",
  borderBottom: "2px solid rgba(67, 77, 91, 0.2)",
  h4: {
    margin: 0,
  },
});

export const StyledMenuFooter = styled(StyledBox)({
  borderRadius: "0 0 16px 16px",
  button: {
    width: "100%",
  },
});

export const StyledMenuContent = styled(StyledBox)({
  gap: "2vh",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  border: "2px solid rgba(67, 77, 91, 0.2)",
  borderRadius: 0,
  background: "rgb(20, 26, 31)",
  height: "100%",
  "::-webkit-scrollbar": { display: "none" },
});

export const StyledMenuItem = styled(StyledBox)(
  ({ isActive, moodColor }: { isActive: boolean; moodColor?: string }) => ({
    display: "flex",
    padding: "1vh 1vw",
    position: "relative",
    width: "calc(100% - 2vw)",
    ".icon-btn": { display: "none" },
    "&:hover": {
      background: isActive ? "" : "rgba(67, 77, 91, 0.3)",
      cursor: "pointer",
      ".icon-btn": {
        display: "flex",
        color: "white",
        background: "rgba(67, 77, 91, 0.3)",
        marginLeft: "auto",
        zIndex: 10,
      },
    },

    "&:after": {
      content: `""`,
      background: moodColor ? moodColor : "rgba(67, 77, 91, 0.5)",
      width: " 100%",
      position: "absolute",
      top: " 0",
      left: "0",
      height: "100%",
      borderRadius: 16,
      opacity: 0.4,
    },
  }),
);

export const StyledMenuItemContent = styled(Box)({
  display: "flex",
  width: "100%",
  alignItems: "center",
});
