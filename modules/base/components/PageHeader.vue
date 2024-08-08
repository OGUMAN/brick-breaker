<template>
  <div class="page-header">
    <h1>{{ title }}</h1>
    <ToMenu />
  </div>
</template>

<script lang="ts" setup>
import ToMenu from "./ToMenu.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
</style>
