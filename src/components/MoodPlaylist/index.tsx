import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ISong } from "../../models/song";
import { removeFromPlaylist } from "../../store/reducers/playlists";
import { selectSong } from "../../store/reducers/songs";
import { getSelectedMood } from "../../store/selectors/moods";
import { getCurrentPlaylist } from "../../store/selectors/playlists";
import { getSongsTotal } from "../../utils";
import EmptyState from "../EmptyState";
import List from "../List";

const MoodPlaylist = () => {
  const dispatch = useDispatch();
  const moodId = useSelector(getSelectedMood)?.id;
  const currentPlaylist = useSelector(getCurrentPlaylist);

  const handleOnRemoveSong = (id: ISong["id"]) => {
    if (moodId) dispatch(removeFromPlaylist({ moodId, id }));
  };
  const handleOnSelectSong = (id: ISong["id"]) => {
    dispatch(selectSong(id));
  };

  const total = useMemo(
    () => getSongsTotal(currentPlaylist),
    [currentPlaylist],
  );

  return moodId ? (
    <List
      list={currentPlaylist}
      title={"Current Playlist"}
      actions={{ onSelect: handleOnSelectSong, onRemove: handleOnRemoveSong }}
      total={total}
    />
  ) : (
    <EmptyState message={"Choose your mood"} />
  );
};

export default MoodPlaylist;
