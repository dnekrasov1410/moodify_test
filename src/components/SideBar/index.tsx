import { faker } from "@faker-js/faker";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMood } from "../../models/mood";
import { addMood, selectMood, updateMood } from "../../store/reducers/moods";
import { createPlaylist } from "../../store/reducers/playlists";
import { getMoodList, getSelectedMood } from "../../store/selectors/moods";
import SideBarComponent from "./component";

const SideBar = () => {
  const dispatch = useDispatch();
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [currentEditableMoodId, setCurrentEditableMoodId] = useState<
    string | null
  >(null);
  const moodList = useSelector(getMoodList);
  const selectedMood = useSelector(getSelectedMood);

  const handleOnselectMood = (mood: TMood) => {
    dispatch(selectMood(mood));
  };
  const handleOnEditMood = (id: TMood["id"]) => {
    setCurrentEditableMoodId(id);
  };
  const handleOnCreateMood = () => {
    setIsCreateMode(true);
  };
  const handleOnRemoveMood = () => {}; // TBD
  const handleOnConfirmEditor = (mood: TMood) => {
    if (mood.id) {
      dispatch(updateMood(mood));
    } else {
      // if a mood is created - a mood ID is generated and a new empty playlist is created and linked to the new mood
      const id = faker.string.uuid();
      dispatch(createPlaylist({ moodId: id }));
      dispatch(addMood({ ...mood, id }));
    }
  };
  const handleCloseEditor = () => {
    setIsCreateMode(false);
    setCurrentEditableMoodId(null);
  };

  return (
    <SideBarComponent
      moodList={moodList}
      selectedMood={selectedMood}
      onSelectMood={handleOnselectMood}
      onCreateMood={handleOnCreateMood}
      onCloseEditor={handleCloseEditor}
      onConfirmEditor={handleOnConfirmEditor}
      onEditMood={handleOnEditMood}
      isCreateMode={isCreateMode}
      currentEditableMoodId={currentEditableMoodId}
    />
  );
};

export default SideBar;
