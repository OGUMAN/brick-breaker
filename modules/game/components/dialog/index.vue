<template>
  <v-dialog persistent max-width="250">
    <v-card>
      <v-card-title class="headline justify-center"
        ><slot name="title"
      /></v-card-title>
      <v-card-text class="d-flex flex-column align-center">
        <slot name="button" />
        <v-btn color="primary" block class="mb-3" @click="playAgain">
          Play Again
        </v-btn>
        <NuxtLink to="/">
          <v-btn color="secondary" block> To Menu </v-btn></NuxtLink
        >
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import Game from "../../app/Game";

const emits = defineEmits(["update:modelValue"]);

const playAgain = () => {
  emits("update:modelValue", false);
  Game.playAgain();
  Game.resume();
};
</script>
