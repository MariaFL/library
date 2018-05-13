<template>
    <div class="panel-signUp">
        <form>
            <v-text-field
                    type="text"
                    v-model="subject_book"
                    label="Subject"
                    required></v-text-field>
            <v-text-field
                    type="number"
                    v-model="class_book"
                    :counter="10"
                    label="Class"
                    required></v-text-field>
            <v-btn @click.prevent="newBook">Добавить книгу</v-btn>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store/index';

export default {
  name: 'BookAdd',
  data() {
    return {
      subject_book: null,
      class_book: null,
      userID: null
    };
  },
  methods: {
    async newBook() {
      this.userID = store.state.user;
      /* eslint-disable no-console */
      axios.post('http://localhost:3000/books', { subject: this.subject_book, class: this.class_book, userID: this.userID })
        .then((responsePost) => {
          console.log(responsePost);
          store.commit('USER_REGISTRATION', responsePost.data.id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
