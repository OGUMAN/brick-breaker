import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    isPaused: false,
    isWonDialog: false,
    isLoseDialog: false,
  }),
  actions: {
    reset() {
      this.isPaused = false;
      this.isWonDialog = false;
      this.isLoseDialog = false;
    },
  },
});
