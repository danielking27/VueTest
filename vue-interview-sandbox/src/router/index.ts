// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import Task01SearchFilter from "../views/Task01SearchFilter.vue";
import Task02TaskList from "../views/Task02TaskList.vue";
import Task03ApiLoading from "../views/Task03ApiLoading.vue";
import Task04BugFix from "../views/Task04BugFix.vue";
import Task05CartSummary from "../views/Task05CartSummary.vue";
import Task06LoginForm from "../views/Task06LoginForm.vue";
import Task07RefactorDiscussion from "../views/Task07RefactorDiscussion.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/task-01-search-filter", name: "task-01", component: Task01SearchFilter },
    { path: "/task-02-task-list", name: "task-02", component: Task02TaskList },
    { path: "/task-03-api-loading", name: "task-03", component: Task03ApiLoading },
    { path: "/task-04-bug-fix", name: "task-04", component: Task04BugFix },
    { path: "/task-05-cart-summary", name: "task-05", component: Task05CartSummary },
    { path: "/task-06-login-form", name: "task-06", component: Task06LoginForm },
    { path: "/task-07-refactor", name: "task-07", component: Task07RefactorDiscussion }
  ]
});

export default router;