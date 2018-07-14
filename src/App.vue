<template>
  <v-app id="inspire app">
    <v-navigation-drawer
            :clipped="$vuetify.breakpoint.lgAndUp"
            v-model="drawer"
            fixed
            app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-tile :key="item.text" :to="item.to">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            color="blue darken-3"
            dark
            app
            fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Ur's Libr</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-if="!user" @click="actionSignInBtn">
        <v-icon>person</v-icon>
      </v-btn>
      <v-btn icon v-if="!user" @click="actionSignUpBtn">
        <v-icon>person_add</v-icon>
      </v-btn>
      <router-link :to="{ name: 'SignOutWindow' }" v-if="user">
        <v-btn icon>
          <v-icon>meeting_room</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
    <sign-in class="modal-pop-up" v-if="pageOn === 'sign-in'" @outClick="closePopUp"></sign-in>
    <sign-up class="modal-pop-up" v-if="pageOn === 'sign-up'" @outClick="closePopUp"></sign-up>
    <v-content>

      <router-view/>
    </v-content>
    <router-link :to="{ name: 'BookAdd' }" v-if="user !== null">
      <v-btn
              fab
              bottom
              right
              color="pink"
              dark
              fixed
      >
        <v-icon>add</v-icon>
      </v-btn>
    </router-link>
  </v-app>
</template>

<script>
import store from './store/index';
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';

export default {
  name: 'App',
  components: {
    SignIn,
    SignUp
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      {
        icon: 'library_books',
        text: 'Books',
        to: { name: 'BooksList' }
      }
    ],
    pageOn: ''
  }),
  computed: {
    user() {
      return store.state.user;
    }
  },
  props: {
    source: String
  },
  methods: {
    actionSignInBtn() {
      this.pageOn = 'sign-in';
    },
    actionSignUpBtn() {
      this.pageOn = 'sign-up';
    },
    closePopUp() {
      this.pageOn = '';
    }
  }
};
</script>

<style lang="stylus">
  @import './assets/styles/index';
</style>
