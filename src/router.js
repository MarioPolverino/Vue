import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/items",
      name: "items",
      component: () => import("./components/ItemList.vue")
    },
    {
      path: "/items/:id",
      name: "items-details",
      component: () => import("./components/Item.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddItem.vue")
    }
  ]
});
