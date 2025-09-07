const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // Home / Landing Page
      { path: "", component: () => import("pages/IndexPage.vue") },

      // Authentication
      { path: "login", component: () => import("pages/loGin.vue") },

      // Dashboard
      { path: "dashboard", component: () => import("pages/dashBoard.vue") },

      // Services
      { path: "services", component: () => import("pages/ourService.vue") },

      // Booking & Billing
      { path: "booking", component: () => import("pages/booking.vue") },
      { path: "billing", component: () => import("pages/billingPage.vue") },

      // Reports
      { path: "report", component: () => import("pages/reportsPage.vue") },
    ],
  },

  // Catch-all 404 page
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
