import Vue from 'vue';
import Router from 'vue-router';
import signUp from '../components/SignUp.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignUp',
      component: signUp,
    },

  ],

});
