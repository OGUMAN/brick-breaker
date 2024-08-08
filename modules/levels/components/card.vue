<template>
  <div
    :style="{
      backgroundColor: levelData.isOpen ? 'cadetblue' : 'gray',
    }"
    class="levels-card"
  >
    <div class="levels-card__id">{{ levelData.id + 1 }}</div>
    <v-icon :icon="`mdi:mdi-${levelData.isOpen ? 'play' : 'lock'}`" size="40" />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { ILevel } from "../types";

const props = defineProps({
  levelData: {
    type: Object as PropType<ILevel>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.levels-card {
  width: 20%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lighten($color: #000000, $amount: 100);
  }

  &__id {
    font-weight: 700;
    font-size: 25px;
  }
}
</style>
