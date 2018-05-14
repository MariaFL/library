<template>
    <div class="booksList">
        Привет!
        <v-card>
            <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline">{{book.subject}}</h3>
                    <h3 class="headline">{{book.class}} класс</h3>
                </div>
            </v-card-title>
            <v-card-actions v-if="user === book.userID">
                <v-btn flat color="orange">Редактировать</v-btn>
                <v-btn flat color="orange">Удалить</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store/index';

export default {
  props: ['bookId'],
  data() {
    return {};
  },
  computed: {
    userID() {
      return store.state.user;
    }
  },
  methods: {
    async getBook() {
      this.book = (await axios.get(`http://localhost:3000/books/${this.bookId}`)).data;
    }
  },
  mounted() {
    this.getBook();
  }
};
</script>

<style>
</style>
