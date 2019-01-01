<template>
    <div class="panel-signUp">
        <form>
            <v-text-field
                    type="text"
                    label="Subject"
                    required
                    v-model="subject_book"
            ></v-text-field>
            <v-text-field
                    type="number"
                    label="Class"
                    required
                    v-model="class_book"
                    :counter="10"
            ></v-text-field>
            <v-btn @click.prevent="newBook">Добавить книгу</v-btn>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store/index';

export default {
  name: 'BookAdd',
  data: () => ({
    subject_book: null,
    class_book: null
  }),
  computed: {
    userID() {
      return store.state.user;
    }
  },
  methods: {
    async newBook() {
      /* eslint-disable no-console */
      axios.post('http://localhost:3000/books', { subject: this.subject_book, class: this.class_book, userID: this.userID, time: new Date() })
        .then((responsePost) => {
          console.log(responsePost);
          this.$router.push('books-list');
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
