import { atom } from "recoil";

export const selectedItemsState = atom<Set<string>>({
  key: "selectedItemsState",
  default: new Set<string>(), // Set<string> as the default value
});
