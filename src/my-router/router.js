import MyRouter from "../plugins/myRouter";
import Foo from "./Foo";
import Vue from "vue";
import Bar from "./Bar";

Vue.use(MyRouter);
const router = new MyRouter({
  routes: [
    {
      path: '/',
      component: Foo
    },
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    }
  ]
})

export default router;
