import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { appStyles } from "../../styles";

const { _gaps } = appStyles;

export const StyledListContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const StyledListHeader = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  h4: { marginTop: 0 },
});

export const StyledListContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: _gaps.sm.vertical,
  flex: 1,
  overflow: "auto",
  "::-webkit-scrollbar": { display: "none" },
});

export const StyledListFooter = styled(Box)(
  ({ isMobileView }: { isMobileView: boolean }) => ({
    display: "flex",
    flexDirection: isMobileView ? "column" : "row",
    justifyContent: "space-between",
  }),
);
