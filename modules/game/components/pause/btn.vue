<template>
  <div class="game-pause-btn">
    <v-btn
      @click="pauseGame"
      variant="flat"
      block
      :icon="gameStore.isPaused ? 'mdi-play' : 'mdi-pause'"
    ></v-btn>
  </div>
  <GamePauseDialog v-model="gameStore.isPaused" />
</template>

<script setup lang="ts">
import Game from "../../app/Game";
import { useGameStore } from "../../gameStore";

const gameStore = useGameStore();

const pauseGame = () => {
  gameStore.isPaused = true;
  Game.pause();
};
</script>

<style lang="scss" scoped>
.game-pause-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  width: 50px;
}
</style>
