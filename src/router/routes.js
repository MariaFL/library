import SignUp from '../components/SignUp.vue';
import BooksList from '../components/BooksList.vue';

export default [
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
