<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height justify-center @click="$emit('outClick')">
                <v-flex xs12 sm8 md4 @click.stop>
                    <v-card class="elevation-12" >
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
                                    :counter="10"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary"
                                   @click.prevent="onSignUp">Зарегестрироваться</v-btn>
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
  name: 'SignUp',
  data: () => ({
    user: null,
    users: []
  }),
  methods: {
    async onSignUp() {
      this.users = (await axios.get('http://localhost:3000/users')).data;
      const exist = this.users.find(user => user.name === this.user);
      /* eslint-disable no-console */
      console.log(exist);
      if (exist !== undefined) {
        console.log(`Имя ${this.user} уже занято, выберите другое`);
      } else if (this.user != null) {
        axios.post('http://localhost:3000/users', { name: this.user })
          .then((responsePost) => {
            console.log(responsePost);
            store.commit('USER_REGISTRATION', responsePost.data.id);
            this.$router.push('books-list');
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log('Введите не пустое имя');
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
