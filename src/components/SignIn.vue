<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login form</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text class="panel-signUp">
                            <v-form>
                                <v-text-field
                                        type="text"
                                        label="Name"
                                        required
                                        v-model="user"
                                        :rules="nameRules"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click.prevent="onSignIn">Войти</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import axios from 'axios';
import store from '../store/index';

export default {
  name: 'SignIn',
  data: () => ({
    user: null,
    users: [],
    nameRules: [
      v => !!v || 'Name is required'
    ]
  }),
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
