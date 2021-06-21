import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import WritingExamples from "../views/WritingExamples.vue"
import Article from "../views/Article.vue"
import Contact from "../views/Contact.vue"
import SubmissionSuccess from '../views/SubmissionSuccess'
import SubmissionFail from '../views/SubmissionFail'

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
  {
    path: '/thanks',
    name: 'success',
    component: SubmissionSuccess
  },
  {
    path: '/404',
    name: 'fail',
    component: SubmissionFail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
