import { createWebHistory, createRouter } from "vue-router";
import Hello from "./components/HelloWorld.vue";
import Main from "./components/Main.vue";

const routes = [
  {
    path: "/",
    component: Hello,
  },
  {
    path: "/AB/:id",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
