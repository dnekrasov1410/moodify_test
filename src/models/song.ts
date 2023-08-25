import { MouseEvent } from "react";

export interface ISong {
  readonly id: string;
  readonly artist: string;
  readonly name: string;
  readonly duration: number;
}

export interface ISongComponent {
  readonly id: ISong["id"];
  readonly artist: ISong["artist"];
  readonly name: ISong["name"];
  readonly duration: ISong["duration"];
  readonly onAdd?: (id: string) => void;
  readonly onRemove?: (id: string) => void;
  readonly onSelect?: (id: string) => void;
}

export interface ISongComponentView
  extends Pick<ISongComponent, "artist" | "name" | "duration"> {
  readonly onAdd?: (e: MouseEvent<HTMLElement>) => void;
  readonly onRemove?: (e: MouseEvent<HTMLElement>) => void;
  readonly onSelect?: (e: MouseEvent<HTMLElement>) => void;
}
