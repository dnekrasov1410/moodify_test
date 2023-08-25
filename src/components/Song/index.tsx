import { MouseEvent } from "react";
import { ISongComponent } from "../../models/song";
import SongComponent from "./component";

const Song = ({
  id,
  artist,
  name,
  duration,
  onAdd,
  onRemove,
  onSelect,
}: ISongComponent) => {
  const handleOnAdd = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onAdd && onAdd(id);
  };
  const handleOnRemove = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove && onRemove(id);
  };
  const handleOnSelect = () => {
    onSelect && onSelect(id);
  };

  return (
    <SongComponent
      duration={duration}
      artist={artist}
      name={name}
      onRemove={onRemove ? handleOnRemove : undefined}
      onAdd={onAdd ? handleOnAdd : undefined}
      onSelect={onSelect ? handleOnSelect : undefined}
    />
  );
};

export default Song;
