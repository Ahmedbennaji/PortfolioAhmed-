import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio";
import About from "../views/About";
import Contact from "../views/Contact";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
     //  import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }

];

const router = new VueRouter({
  routes
});

export default router;
