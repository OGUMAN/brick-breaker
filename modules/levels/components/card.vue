<template>
  <div
    @click="onLevelClick"
    :style="{
      backgroundColor: isOpen ? 'cadetblue' : 'gray',
    }"
    class="levels-card"
  >
    <div class="levels-card__id">{{ levelData.id + 1 }}</div>
    <v-icon :icon="`mdi:mdi-${isOpen ? 'play' : 'lock'}`" size="40" />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { ILevel } from "../types";
import { useLevelsStore } from "../store";

const levelsStore = useLevelsStore();

const props = defineProps({
  levelData: {
    type: Object as PropType<ILevel>,
    required: true,
  },
});

const isOpen = computed(() => {
  return levelsStore.openedLevel >= props.levelData.id;
});

const onLevelClick = () => {
  levelsStore.currentLevel = props.levelData.id;
  useRouter().push("/game");
};
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

  &__id {
    font-weight: 700;
    font-size: 25px;
  }
}
</style>
