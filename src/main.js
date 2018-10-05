import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Semantic from 'semantic-ui-vue';
import {
    routes
} from './routing';

import {
    store
} from './store/store';

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

Vue.use(Semantic);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');