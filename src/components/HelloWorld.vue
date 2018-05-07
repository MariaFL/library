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

export default {
  name: 'HelloWorld',
  data() {
    return {
      user: null,
      users: [],
    };
  },
  methods: {
    async onSignUp() {
      this.users = (await axios.get('http://localhost:3000/users')).data;
      const exist = this.users.find(user => user.UserName === 'Lido');
      /* eslint-disable no-console */
      console.log(exist);
    },
  },
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
