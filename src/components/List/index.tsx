import { IListComponent } from "../../models/common";
import { ISong } from "../../models/song";
import { getParsedTime } from "../../utils";
import Song from "../Song";
import {
  StyledListContainer,
  StyledListContent,
  StyledListFooter,
  StyledListHeader,
} from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const List = ({ list, title, actions, total }: IListComponent) => {
  const isMobileView = useMediaQuery("(max-width:600px)");
  return (
    <StyledListContainer>
      <StyledListHeader>
        <h4>{title}</h4>
      </StyledListHeader>

      <StyledListContent>
        {list.map(({ id, artist, name, duration }: ISong) => (
          <Song
            id={id}
            artist={artist}
            name={name}
            duration={duration}
            onAdd={actions?.onAdd}
            onRemove={actions?.onRemove}
            onSelect={actions?.onSelect}
          />
        ))}
      </StyledListContent>
      <StyledListFooter isMobileView={isMobileView}>
        <h5>Total items: {total?.items}</h5>
        <h5>Total duration: {getParsedTime(total?.duration)}</h5>
      </StyledListFooter>
    </StyledListContainer>
  );
};

export default List;
