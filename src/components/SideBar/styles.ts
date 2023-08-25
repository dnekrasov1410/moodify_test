import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { appStyles, StyledCommonBlockContainer } from "../../styles";

const { _borders, _gaps, _bgColors, _paddings } = appStyles;

export const StyledMenuTitle = styled(StyledCommonBlockContainer)(
  ({ isMobileView }: { isMobileView: boolean }) => ({
    borderRadius: isMobileView ? 0 : "16px 16px 0 0",
    borderBottom: _borders.main,
    h4: {
      margin: 0,
    },
  }),
);

export const StyledMenuFooter = styled(StyledCommonBlockContainer)(
  ({ isMobileView }: { isMobileView: boolean }) => ({
    borderRadius: isMobileView ? 0 : "0 0 16px 16px",
    button: {
      width: "100%",
    },
  }),
);

export const StyledMenuContent = styled(StyledCommonBlockContainer)({
  background: _bgColors.main,
  gap: _gaps.main.vertical,
  border: _borders.main,
  display: "flex",
  flexDirection: "column",
  borderRadius: 0,
  height: "100%",
  overflow: "auto",
  "::-webkit-scrollbar": { display: "none" },
});

export const StyledMenuItem = styled(StyledCommonBlockContainer)(
  ({
    isActive,
    moodColor,
    isMobileView,
  }: {
    isActive: boolean;
    moodColor?: string;
    isMobileView?: boolean;
  }) => ({
    padding: _paddings.sm,
    display: "flex",
    position: "relative",
    width: "calc(100% - 2vw)",
    ".icon-btn": isMobileView
      ? {
          background: _bgColors.secondary,
          display: "flex",
          color: "white",
          marginLeft: "auto",
          zIndex: 10,
        }
      : { display: "none" },
    "&:hover": {
      background: isActive ? "" : _bgColors.secondary,
      cursor: "pointer",
      ".icon-btn": {
        background: _bgColors.secondary,
        display: "flex",
        color: "white",
        marginLeft: "auto",
        zIndex: 10,
      },
    },

    "&:after": {
      content: `""`,
      background: moodColor ? moodColor : _bgColors.secondary,
      width: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      borderRadius: _borders.mainRadius,
      opacity: 0.5,
    },
  }),
);

export const StyledMenuItemContent = styled(Box)({
  display: "flex",
  width: "100%",
  alignItems: "center",
});
