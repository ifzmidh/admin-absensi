import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import Attendance from "@/views/Attendance/Attendance.vue";
import Permit from "@/views/Permit/Permit.vue";
import Sick from "@/views/Sick/Sick.vue";
import Leave from "@/views/Leave/Leave.vue";
import Users from "@/views/Users/Users.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/users",
      name: "Users",
      component: Users,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/attendance",
      name: "Attendance",
      component: Attendance,
    },
    {
      path: "/permit",
      name: "Permit",
      component: Permit,
    },
    {
      path: "/sick",
      name: "Sick",
      component: Sick,
    },
    {
      path: "/leave",
      name: "Leave",
      component: Leave,
    },
  ],
});

export default router;
