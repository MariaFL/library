import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import BooksList from '../components/BooksList.vue';
import BookAdd from '../components/BookAdd.vue';
import BookPage from '../components/BookPage.vue';
import BookEdited from '../components/BookEdited.vue';

export default [
  {
    path: '/sign-in',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/books-list',
    name: 'booksList',
    component: BooksList
  },
  {
    path: '/book-add',
    name: 'bookAdd',
    component: BookAdd
  },
  {
    path: '/book/:id',
    name: 'bookPage',
    component: BookPage
  },
  {
    path: '/book-edit/:id',
    name: 'bookEdited',
    component: BookEdited
  }
];
