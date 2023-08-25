import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { appStyles, StyledCommonBlockContainer } from "../../styles";

const { _paddings, _bgColors, _gaps, _borders } = appStyles;
const StyledMainWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "96vh",
});
export const StyledWrapper = styled(Box)({
  background: _bgColors.main,
  padding: _paddings.main,
  gap: _gaps.main.horizontal,
  width: "96vw",
  minHeight: "96vh",
  display: "flex",
});
export const StyledSideBarWrapper = styled(StyledMainWrapper)(
  ({ isMobileView }: { isMobileView?: boolean }) => ({
    flex: 2,
    ...(isMobileView && {
      width: "70vw",
      background: _bgColors.main,
    }),
  }),
);
export const StyledContentWrapper = styled(StyledMainWrapper)({
  gap: _gaps.main.vertical,
  flex: 10,
});

export const StyledHeaderWrapper = styled(StyledCommonBlockContainer)({
  display: "flex",
  justifyContent: "space-between",
  ".icon-btn-menu": {
    color: "white",
  },
});

export const StyledHeaderContainer = styled(Box)({
  width: "100%",
});

export const StyledContent = styled(StyledCommonBlockContainer)({
  gap: _gaps.main.horizontal,
  display: "flex",
  flexDirection: "row",
  flex: 1,
  background: "none",
  padding: 0,
  height: "100%",
  overflow: "hidden",
});

export const StyledContentItem = styled(StyledCommonBlockContainer)({
  gap: _gaps.main.vertical,
  display: "flex",
  flexDirection: "column",
  flex: 1,
  overflow: "hidden",
});
