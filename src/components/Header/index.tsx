import { useSelector } from "react-redux";
import { getSelectedSong } from "../../store/selectors/songs";
import EmptyState from "../EmptyState";
import Song from "../Song";

const Header = () => {
  const selectedSong = useSelector(getSelectedSong);

  return selectedSong ? (
    <Song {...selectedSong} />
  ) : (
    <EmptyState message={"Select Song"} />
  );
};

export default Header;
