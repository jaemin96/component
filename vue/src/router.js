import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import InputTag from "./components/InputTag.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/input-tag",
    name: "InputTag",
    component: InputTag,
  },
  {
    path: "/404",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
