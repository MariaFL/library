<template>
    <div class="booksList">
        <ul>
            <li v-for="book in books" :key="book.class">
                {{ book }}
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      books: [],
    };
  },
  methods: {
    async getBooks() {
      this.books = (await axios.get('http://localhost:3000/books')).data;
    },
  },
  mounted() {
    this.getBooks();
  },
};
</script>

<style>

</style>
