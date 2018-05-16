<template>
    <div class="panel-signUp">
        <form>
            <v-text-field
                    type="text"
                    label="Subject"
                    required
                    v-model="book.subject"
            ></v-text-field>
            <v-text-field
                    type="number"
                    label="Class"
                    required
                    v-model="book.class"
                    :counter="10"
            ></v-text-field>
            <v-btn @click.prevent="editBook">Сохранить изменения</v-btn>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookEdited',
  data: () => ({
    book: {}
  }),
  computed: {
  },
  methods: {
    async getBook() {
      const id = this.$route.params.id;
      this.book = (await axios.get(`http://localhost:3000/books/${id}`)).data;
    },
    async editBook() {
      const id = this.$route.params.id;
      /* eslint-disable no-console */
      axios.put(`http://localhost:3000/books/${id}`, { subject: this.book.subject, class: this.book.class, userID: this.book.userID })
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
