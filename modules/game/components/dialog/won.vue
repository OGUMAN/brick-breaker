<template>
  <GameDialog v-model="gameStore.isWonDialog">
    <template #title>You won!</template>
    <template #button>
      <v-btn @click="newLevel" color="success" class="mb-3" block
        >Next level</v-btn
      >
    </template>
  </GameDialog>
</template>

<script lang="ts" setup>
import Game from "../../app/Game";
import { useGameStore } from "../../gameStore";
const gameStore = useGameStore();

const emits = defineEmits(["update:modelValue"]);

const newLevel = () => {
  gameStore.isPaused = false;
  Game.resume();
  Game.nextLevel();
  gameStore.isWonDialog = false;
};
</script>
