<template>
  <div>
    <!-- Using dot notation to access the props from the 'user' -->
    <h1>Create an Event, {{ user.name }}</h1>
    <p> User ID: {{ user.id }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>There are {{ catLength }} categories</p>
    <p>{{ getEvent(1) }}</p>
  </div>
</template>

<script>
// See https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
import { mapState } from 'vuex'

export default {
  data() {
    return {
      somethingElse: 'Example text here'
    }
  },
  computed: {
    getEvent() {
      return this.$store.getters.getEventById
    },
    catLength() {
      // return this.$store.state.categories.length // Getting length of store property directly
      return this.$store.getters.catLength // Getting length from our store getter
    },
    ...mapState(['user', 'categories'])
  }
}
</script>
