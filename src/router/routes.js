import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import BooksList from '../components/BooksList.vue';

export default [
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/books-list',
    name: 'BooksList',
    component: BooksList
  }
];
