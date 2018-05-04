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
      user: '',
    };
  },
  methods: {
    onSignUp() {
      axios.post('http://localhost:3000/users', { UserName: 'TTT' })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
