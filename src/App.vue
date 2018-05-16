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
      <router-link :to="{ name: 'SignIn' }">
        <v-btn icon>
          <v-icon>person</v-icon>
        </v-btn>
      </router-link>
      <router-link :to="{ name: 'SignUp' }">
        <v-btn icon>
          <v-icon>person_add</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
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

export default {
  name: 'App',
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      {
        icon: 'library_books',
        text: 'Books',
        to: { name: 'BooksList' }
      }
    ]
  }),
  computed: {
    user() {
      return store.state.user;
    }
  },
  props: {
    source: String
  }
};
</script>

<style lang="stylus">
  @import './assets/styles/index'
</style>
