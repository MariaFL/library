import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import SignOutWindow from '../components/SignOutWindow.vue';
import BooksList from '../components/BooksList.vue';
import BookAdd from '../components/BookAdd.vue';
import BookPage from '../components/BookPage.vue';
import BookEdited from '../components/BookEdited.vue';

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
    path: '/sign-out',
    name: 'SignOutWindow',
    component: SignOutWindow
  },
  {
    path: '/',
    name: 'BooksList',
    component: BooksList
  },
  {
    path: '/books-list',
    name: 'BooksList',
    component: BooksList
  },
  {
    path: '/book-add',
    name: 'BookAdd',
    component: BookAdd
  },
  {
    path: '/book/:id',
    name: 'BookPage',
    component: BookPage
  },
  {
    path: '/book-edit/:id',
    name: 'BookEdited',
    component: BookEdited
  }
];
