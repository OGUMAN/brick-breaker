<template>
  <GameDialog>
    <template #title>Pause</template>
    <template #button>
      <v-btn @click="resume" color="success" class="mb-3" block> Resume </v-btn>
    </template>
  </GameDialog>
</template>

<script lang="ts" setup>
import Game from "../../app/Game";
import { useGameStore } from "../../gameStore";

const gameStore = useGameStore();

const resume = () => {
  gameStore.isPaused = false;
  Game.resume();
};
</script>
