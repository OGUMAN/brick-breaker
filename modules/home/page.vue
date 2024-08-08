<template>
  <div class="home">
    <div class="content home__content">
      <v-btn color="blue"> 
        <NuxtLink to="levels">Play</NuxtLink>
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
