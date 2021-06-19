import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import WritingExamples from "../views/WritingExamples.vue"
import Article from "../views/Article.vue"
import Contact from "../views/Contact.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/writing-examples",
    name: "WritingExamples",
    component: WritingExamples,
    props: route => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/writing-examples/:id",
    name: "Article",
    props: true,
    component: Article,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
