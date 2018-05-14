<template>
    <div class="booksList">
        <v-layout row wrap>
            <v-flex xs12 sm3 offset-xs0 offset-lg2 mt-5 v-for="book in books" :key="book.class">
                <v-card>
                    <router-link :to="`/book/${book.id}`" :settings="`${book.id}`">
                        <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
                        </v-card-media>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline">{{book.subject}}</h3>
                                <h3 class="headline">{{book.class}} класс</h3>
                            </div>
                        </v-card-title>
                    </router-link>
                    <v-card-actions v-if="user === book.userID">
                        <v-btn flat color="orange">Редактировать</v-btn>
                        <v-btn flat color="orange">Удалить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

import axios from 'axios';
import store from '../store/index';

export default {
  data() {
    return {
      books: []
    };
  },
  computed: {
    user() {
      return store.state.user;
    },
    linkTo(bookId) {
      return `/book/${bookId}`;
    }
  },
  methods: {
    async getBooks() {
      this.books = (await axios.get('http://localhost:3000/books')).data;
    }
  },
  mounted() {
    this.getBooks();
  }
};
</script>

<style>

</style>
