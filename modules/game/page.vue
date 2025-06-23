<template>
  <div class="game">
    <div class="content">
      <GamePauseBtn />
      <GameDialogWon />
      <GameDialogLose />
      <canvas class="game__canvas" ref="gameCanvas" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Game from "./app/Game";
import { useGameStore } from "./gameStore";
const gameCanvas = ref();

const gameStore = useGameStore();

onMounted(() => {
  Game.init(gameCanvas.value);
});

onUnmounted(() => {
  gameStore.reset();
});
</script>

<style lang="scss" scoped>
.content {
  padding: 0 !important;
  position: relative;
}

.game {
  &__canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
