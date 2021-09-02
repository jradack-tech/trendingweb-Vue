import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import uniswapexplorer from "./views/uniswapexplorer";
import editprofile from "./views/editprofile";
import bigswapexplorer from "./views/bigswapexplorer";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/uniswapexplorer", component: uniswapexplorer },
  { path: "/editprofile", component: editprofile },
  { path: "/bigswapexplorer", component: bigswapexplorer },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
