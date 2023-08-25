import { Box } from "@mui/material";
import { styled } from "@mui/system";

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
  gap: "1vh",
  flex: 1,
  overflow: "auto",
  "::-webkit-scrollbar": { display: "none" },
});

export const StyledListFooter = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});
