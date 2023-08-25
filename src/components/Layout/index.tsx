import React from "react";
import AllSongs from "../AllSongs";
import Header from "../Header";
import MoodPlaylist from "../MoodPlaylist";
import SideBar from "../SideBar";
import {
  StyledContent,
  StyledContentItem,
  StyledHeader,
  StyledMainContainer,
  StyledWrapper,
} from "./styles";

const Layout = () => (
  <StyledWrapper>
    <SideBar />
    <StyledMainContainer>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <StyledContent>
        <StyledContentItem>
          <MoodPlaylist />
        </StyledContentItem>
        <StyledContentItem>
          <AllSongs />
        </StyledContentItem>
      </StyledContent>
    </StyledMainContainer>
  </StyledWrapper>
);

export default Layout;
