<template>
  <div class="panel-signUp">
      <form>
          <input type="text" id="input-email" v-model="user">
          <button @click.prevent="onSignUp">Зарегестрироваться</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: '',
      dataJson: ''
    }
  },
  methods: {
    onSignUp () {
      let dataJson = axios.get('../data/users.json')
      console.log(dataJson)
      return dataJson
    }
  }
}
</script>

<style>

</style>