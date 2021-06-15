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
    name: "writing-examples",
    component: WritingExamples,
  },
  {
    path: "writing-examples/:id",
    component: Article,
    props: true
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
