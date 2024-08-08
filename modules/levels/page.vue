<template>
  <div class="levels">
    <div class="content">
      <PageHeader :title="'Levels'" />
      <div class="levels__list">
        <LevelsCard
          v-for="level in levels"
          :key="level.id"
          :level-data="level"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from "../base/components/PageHeader.vue";

const levels = [
  { isOpen: true, id: 0 },
  { isOpen: false, id: 1 },
];
</script>

<style lang="scss" scoped>
.levels {
  &__list {
    display: flex;
    gap: 15px;
  }
}
</style>
