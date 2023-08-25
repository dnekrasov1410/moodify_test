import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import { ISongComponentView } from "../../models/song";
import { getParsedTime } from "../../utils";
import {
  StyledActionContainer,
  StyledArtistName,
  StyledDurationBlock,
  StyledSongItemContainer,
  StyledSongName,
  StyledTitleContainer,
} from "./styles";

const SongComponent = ({
  onSelect,
  artist,
  name,
  duration,
  onRemove,
  onAdd,
}: ISongComponentView) => (
  <StyledSongItemContainer onClick={onSelect}>
    <StyledTitleContainer>
      <StyledArtistName>
        <h4>{artist}</h4>
      </StyledArtistName>
      <StyledSongName>
        <span>{name}</span>
      </StyledSongName>
    </StyledTitleContainer>
    <StyledDurationBlock>
      <div>{getParsedTime(duration)}</div>
    </StyledDurationBlock>
    {onRemove ? (
      <StyledActionContainer>
        <IconButton aria-label="delete" size="small" onClick={onRemove}>
          <DeleteForeverIcon fontSize="small" />
        </IconButton>
      </StyledActionContainer>
    ) : onAdd ? (
      <StyledActionContainer>
        <IconButton aria-label="add" size="small" onClick={onAdd}>
          <AddCircleIcon fontSize="inherit" />
        </IconButton>
      </StyledActionContainer>
    ) : null}
  </StyledSongItemContainer>
);

export default SongComponent;
