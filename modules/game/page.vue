<template>
  <div class="game">
    <div class="content">
      <canvas class="game__canvas" ref="gameCanvas" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import App from "./app/App";
const gameCanvas = ref();

onMounted(() => {
  App.init(gameCanvas.value);
});
</script>

<style lang="scss" scoped>
.content {
  padding: 0 !important;
}

.game {
  &__canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
