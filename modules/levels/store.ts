import { defineStore } from "pinia";

export const useLevelsStore = defineStore("levelsStore", {
  state: () => ({
    currentLevel: 0,
    openedLevel: 0,
  }),
});
