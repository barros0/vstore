import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../views/Login.vue';
import HelloWorld from '../components/HelloWorld.vue';

let router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/login', component: Login },
    ]
});

export default router;