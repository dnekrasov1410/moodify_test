import { ReactNode } from "react";
import { ISong } from "./song";

export interface IListComponent {
  readonly list: ISong[];
  readonly title: string;
  readonly total?: { readonly items: number; readonly duration: number };
  readonly actions?: {
    readonly onAdd?: (id: ISong["id"]) => void;
    readonly onRemove?: (id: ISong["id"]) => void;
    readonly onSelect: (id: ISong["id"]) => void;
  };
}

export interface IEmptyStateComponent {
  message: ReactNode;
}
