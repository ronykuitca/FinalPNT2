import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Final from "./components/final.vue"


export const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/final", component: Final},

    ],
});

