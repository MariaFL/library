<template>
    <div class="panel-signUp">
        <form>
            <input type="text" id="input-email" v-model="user">
            <button @click.prevent="onSignUp">Зарегестрироваться</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store';

export default {
  name: 'SignUp',
  data() {
    return {
      user: null,
      users: [],
    };
  },
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
            store.commit('setUser', responsePost.data.id);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log('Введите не пустое имя');
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
