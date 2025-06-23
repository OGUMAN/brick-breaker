<template>
  <div class="levels">
    <div class="content">
      <PageHeader :title="'Levels'" />
      <div class="levels__list">
        <LevelsCard
          v-for="(level, index) in levels"
          :key="index"
          :level-data="level"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import PageHeader from "../base/components/PageHeader.vue";

const levels = ref<any[]>([]);

onBeforeMount(async () => {
  let index = 1;

  while (true) {
    try {
      const levelData = await import(`./data/${index}.json`);
      levels.value.push(levelData.default); // Make sure to access `.default`
      index++;
    } catch (error) {
      console.info(`No more levels found after ${index - 1} files.`);
      break;
    }
  }

  console.log(levels.value)
});
</script>

<style lang="scss" scoped>
.levels {
  &__list {
    display: flex;
    gap: 15px;
  }
}
</style>
