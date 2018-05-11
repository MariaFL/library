<template>
    <div class="panel-signUp">
        <v-form>
            <v-text-field
                    type="text"
                    v-model="user"
                    :rules="nameRules"
                    label="Name"
                    required></v-text-field>
            <v-btn @click.prevent="onSignIn">Войти</v-btn>
        </v-form>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store/index';

export default {
  name: 'SignIn',
  data() {
    return {
      user: null,
      users: [],
      nameRules: [
        v => !!v || 'Name is required'
      ]
    };
  },
  computed: {
  },
  methods: {
    async onSignIn() {
      if (this.user !== null) {
        this.users = (await axios.get('http://localhost:3000/users')).data;
        const exist = this.users.find(user => user.name === this.user);
        /* eslint-disable no-console */
        console.log(exist);
        if (exist !== undefined) {
          console.log(`Приветствуем ${this.user}`);
          store.commit('USER_REGISTRATION', exist.id);
          this.$router.push('books-list');
        }
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
