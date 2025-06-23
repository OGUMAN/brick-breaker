<template>
  <GameDialog v-model="gameStore.isLoseDialog">
    <template #title>Game Over</template>
    <template #button></template>
  </GameDialog>
</template>

<script lang="ts" setup>
import { useGameStore } from "../../gameStore";

const gameStore = useGameStore();
</script>
