import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../view/dashboard.vue";
import TableStudent from "../view/tableStudent.vue";
import path from "path";

// 1. ĐỊNH NGHĨA MẢNG TUYẾN ĐƯỜNG TRƯỚC
const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    // Đảm bảo bạn push tới path này (/students),
    // chứ không phải /table-student như bạn đã thử push trước đó
    path: "/table-student",
    name: "students",
    component: TableStudent,
  },
  {
    path: "/time-lock-sign",
    name: "timeLockSign",
    component: () => import("../view/timeLockSign.vue"),
  },
  {
    path: "/ClassSchedule",
    name: "ClassSchedule",
    component: () => import("../view/ClassSchedule.vue"),
  },
  {
    path: "/classAchievement",
    name: "classAchievement",
    component: () => import("../view/classAchievement.vue"),
  },
  {
    path: "/studentAchievement",
    name: "studentAchievement",
    component: () => import("../view/studentAchievement.vue"),
  },
];

// 2. KHỞI TẠO ROUTER VÀ TRUYỀN MẢNG TUYẾN ĐƯỜNG VÀO
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes, // 👈 Sửa lỗi: Truyền mảng routes đã định nghĩa ở trên
});

export default router;
