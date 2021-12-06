<template>
  <div>
    <!-- Using dot notation to access the props from the 'user' -->
    <h1>Create an Event, {{ user.name }}</h1>
    <p> User ID: {{ user.id }}</p>
    <ul>
      <li v-for="cat in cats" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
  // See https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
  import { mapState } from 'vuex'

  export default {
    computed: mapState({
      // passing the string value 'count' is same as `state => state.count`
      // This only work if you are accessing properties that are
      // defined directly on the store state object.
      user: 'user',
      cats: 'categories' // Notice we can rename the reference to our property.
    })
  }
</script>
