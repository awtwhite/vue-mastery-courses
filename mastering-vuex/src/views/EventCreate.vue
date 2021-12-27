<template>
  <div>
    <!-- Using dot notation to access the props from the 'user' -->
    <h1>Create an Event, {{ user.name }}</h1>
    <p> User ID: {{ user.id }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>There are {{ catLength }} categories</p>
    <p>{{ getEventById(2) }}</p>
  </div>
</template>

<script>
// See https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      somethingElse: 'Example text here'
    }
  },
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories'])
  }
}
</script>
