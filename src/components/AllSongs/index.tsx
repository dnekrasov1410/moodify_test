import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ISong } from "../../models/song";
import { addToPlaylist } from "../../store/reducers/playlists";
import { selectSong } from "../../store/reducers/songs";
import { getSelectedMoodId } from "../../store/selectors/moods";
import { getFilteredSongList } from "../../store/selectors/songs";
import { getSongsTotal } from "../../utils";
import List from "../List";

const AllSongs = () => {
  const dispatch = useDispatch();
  const moodId = useSelector(getSelectedMoodId);
  const songList = useSelector(getFilteredSongList);

  const handleOnAddSong = (id: ISong["id"]) => {
    const selectedSong = songList.find((song) => song.id === id);
    if (selectedSong && moodId)
      dispatch(addToPlaylist({ moodId, song: selectedSong }));
  };

  const handleOnSelectSong = (id: ISong["id"]) => {
    dispatch(selectSong(id));
  };

  const total = useMemo(() => getSongsTotal(songList), [songList]);

  return (
    <List
      list={songList}
      title={"All Songs"}
      actions={{ onSelect: handleOnSelectSong, onAdd: handleOnAddSong }}
      total={total}
    />
  );
};

export default AllSongs;
