import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import AllSongs from "../AllSongs";
import Header from "../Header";
import MoodPlaylist from "../MoodPlaylist";
import SideBar from "../SideBar";
import {
  StyledContent,
  StyledContentItem,
  StyledContentWrapper,
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledSideBarWrapper,
  StyledWrapper,
} from "./styles";

const Layout = () => {
  const isMobileView = useMediaQuery("(max-width:600px)");
  const [isMobMenuDisplayed, setIsMobMenuDisplayed] = useState(false);
  const toggleMenu = () => setIsMobMenuDisplayed(!isMobMenuDisplayed);
  return (
    <StyledWrapper>
      {isMobileView ? (
        <Drawer anchor={"left"} open={isMobMenuDisplayed} onClose={toggleMenu}>
          <StyledSideBarWrapper isMobileView>
            <SideBar />
          </StyledSideBarWrapper>
        </Drawer>
      ) : (
        <StyledSideBarWrapper>
          <SideBar />
        </StyledSideBarWrapper>
      )}
      <StyledContentWrapper>
        <StyledHeaderWrapper>
          <StyledHeaderContainer>
            <Header />
          </StyledHeaderContainer>
          {isMobileView && (
            <IconButton className={"icon-btn-menu"} onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
          )}
        </StyledHeaderWrapper>
        <StyledContent>
          <StyledContentItem>
            <MoodPlaylist />
          </StyledContentItem>
          <StyledContentItem>
            <AllSongs />
          </StyledContentItem>
        </StyledContent>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default Layout;
