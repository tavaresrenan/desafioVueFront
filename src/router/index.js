import Vue from "vue";
import VueRouter from "vue-router";

import First from "../view/First";
import Second from "../view/Second";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "*",
            redirect: { name: "main" }
        },
        {
            path:"/page/1",
            name: "main",
            component: First
        },
        {
            path:"/page/2",
            component: Second
        }
    ]
});