<template>
  <div>
    <!-- Using dot notation to access the props from the 'user' -->
    <h1>Create an Event, {{ user.name }}</h1>
    <p> User ID: {{ user.id }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>{{ localComputed }}</p>
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
      // Define our local computed properties
      localComputed() {
        return this.somethingElse
      },
      // Then include our store computed properties
      ...mapState([ 'user', 'categories' ])}
  }
</script>
