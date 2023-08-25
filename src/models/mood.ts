import { MouseEvent } from "react";
import { ISong } from "./song";

export interface MoodsState {
  readonly list: TMood[];
  readonly selectedMood: TMood | null;
}

export type TMood = {
  readonly id: string;
  readonly color?: string;
  readonly title: string;
};

export interface IMoodComponentView {
  readonly moodList: TMood[];
  readonly selectedMood: TMood | null;
  readonly isCreateMode: boolean;
  readonly currentEditableMoodId: TMood["id"] | null;
  readonly onSelectMood: (mood: TMood) => void;
  readonly onConfirmEditor: (mood: TMood) => void;
  readonly onEditMood: (id: TMood["id"]) => void;
  readonly onCreateMood: (e: MouseEvent<HTMLElement>) => void;
  readonly onCloseEditor: () => void;
  readonly isMobileView: boolean;
  readonly onRemove: (id: TMood["id"]) => void;
}

export interface IMoodEditorComponent {
  readonly mood?: TMood;
  readonly onCancel: () => void;
  readonly onConfirm: (mood: TMood) => void;
  readonly onRemove?: (id: TMood["id"]) => void;
}
export interface IMoodEditorComponentView {
  readonly currentMood: TMood;
  readonly onChange: ({
    field,
    val,
  }: {
    field: "color" | "title";
    val: TMood["color"] | TMood["title"];
  }) => void;
  readonly onCancel: () => void;
  readonly onConfirm: (e: MouseEvent<HTMLElement>) => void;
  readonly onRemove?: (e: MouseEvent<HTMLElement>) => void;
}
