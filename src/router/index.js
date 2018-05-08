import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex'
import config from './config';

Vue.use(Router);
Vue.use(Vuex);

const router = new Router(config);

export default router;
