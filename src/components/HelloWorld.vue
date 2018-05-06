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

async function getJsonData() {
  const jsonUsers = await axios.get('http://localhost:3000/users');
  return jsonUsers;
}

export default {
  name: 'HelloWorld',
  data() {
    return {
      user: '',
      users: [],
    };
  },
  methods: {
    onSignUp() {
      getJsonData()
        .then(function (response) {
          /* eslint-disable */
          console.log(response);
          /* eslint-enable */
          if (response.data.find(this.user) !== undefined) {
            console.log('такой пользователь уже есть');
          } else {
            axios.post('http://localhost:3000/users', { UserName: this.user })
              .then((responsePost) => {
                /* eslint-disable */
                console.log(responsePost);
                /* eslint-enable */
              })
              .catch((error) => {
                /* eslint-disable */
                console.log(error);
                /* eslint-enable */
              });
          }
        })
        .catch((error) => {
          /* eslint-disable */
          new Error(error);
          console.log(error.message);
          /* eslint-enable */
        });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
