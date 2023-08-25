import { useState } from "react";
import { IMoodEditorComponent, TMood } from "../../models/mood";
import MoodEditorComponent from "./component";

const MoodEditor = ({ onConfirm, onCancel, mood }: IMoodEditorComponent) => {
  const newMoodInitialState: TMood = {
    id: "",
    title: "",
    color: "",
  };
  const [currentMood, setCurrentMood] = useState<TMood>(
    mood || newMoodInitialState,
  );

  const handleOnConfirm = () => {
    if (currentMood.title && onConfirm) {
      onConfirm(currentMood);
      handleOnReset();
    }
  };

  const handleOnReset = () => {
    setCurrentMood(newMoodInitialState);
    onCancel();
  };

  const handleOnChange = ({
    field,
    val,
  }: {
    field: "color" | "title";
    val: TMood["color"] | TMood["title"];
  }) => {
    setCurrentMood({ ...currentMood, [field]: val });
  };

  return (
    <MoodEditorComponent
      onConfirm={handleOnConfirm}
      onCancel={handleOnReset}
      onChange={handleOnChange}
      currentMood={currentMood}
    />
  );
};

export default MoodEditor;
