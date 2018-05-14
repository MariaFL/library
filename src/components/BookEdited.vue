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
            <v-btn @click.prevent="editBook">Сохранить изменения</v-btn>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store/index';

export default {
  name: 'BookEdited',
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
