const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },

      { path: "login", component: () => import("pages/loGin.vue") },
      { path: "services", component: () => import("pages/ourService.vue") },
      { path: "booking", component: () => import("pages/booking.vue") },
      { path: "billing", component: () => import("pages/billingPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
