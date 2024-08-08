import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: "home",
      path: "/",
      component: () =>
        import("~/modules/home/page.vue").then((r) => r.default || r),
    },
    {
      name: "levels",
      path: "/levels",
      component: () =>
        import("~/modules/levels/page.vue").then((r) => r.default || r),
    },
    {
        name: "game",
        path: "/game",
        component: () =>
          import("~/modules/game/page.vue").then((r) => r.default || r),
      },
  ],
};
