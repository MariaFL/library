<template>
    <div class="panel-signUp">
        <h3>Учетная запись: {{userName}}</h3>
        <p>Чтобы покинуть учетную запись, нажмите кноку "Выйти"</p>
        <v-btn @click.prevent="onSignOut">Выйти</v-btn>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store/index';

export default {
  data: () => ({
    userID: store.state.user,
    userName: null
  }),
  computed: {
  },
  methods: {
    onSignOut() {
      store.commit('USER_LOGOUT');
      this.$router.push('books-list');
    },
    async getUserName() {
      this.userName = (await axios.get(`http://localhost:3000/users/${this.userID}`)).data.name;
    }
  },
  mounted() {
    this.getUserName();
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

