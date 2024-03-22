import { ItemType } from "../type/types";

export const renderItem = (items: ItemType[]) =>
  items.map((item) => ({
    ...item,
    title:
      item.title && item.title.length > 50
        ? item.title.substring(0, 50) + "…"
        : item.title,
  }));