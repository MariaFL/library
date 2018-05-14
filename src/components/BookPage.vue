<template>
    <div class="booksList">
        <v-card>
            <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline">{{book.subject}}</h3>
                    <h3 class="headline">{{book.class}} класс</h3>
                </div>
            </v-card-title>
            <v-card-actions v-if="userID === book.userID">
                <router-link :to="`/book-edit/${book.id}`">
                    <v-btn flat color="orange">Редактировать</v-btn>
                </router-link>
                <v-btn flat color="orange" @click.prevent="deleteBook(book.id)">Удалить</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store/index';

export default {
  data() {
    return {
      book: {}
    };
  },
  computed: {
    userID() {
      return store.state.user;
    }
  },
  methods: {
    async getBook() {
      const id = this.$route.params.id;
      this.book = (await axios.get(`http://localhost:3000/books/${id}`)).data;
    },
    async deleteBook(id) {
      /* eslint-disable no-console */
      await axios.delete(`http://localhost:3000/books/${id}`)
        .then((responsePost) => {
          console.log(responsePost);
          this.$router.push('/books-list');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getBook();
  }
};
</script>

<style>
</style>
