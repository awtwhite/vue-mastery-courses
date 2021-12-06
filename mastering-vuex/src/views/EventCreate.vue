<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <p> This event was created by {{ userName }}</p>
    <p> User ID: {{ userId }}</p>
    <p> Event categories: {{ categories }}</p>
  </div>
</template>

<script>
  // See https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
  import { mapState } from 'vuex'

  export default {
    computed: mapState({
      // arrow functions can make the code very succinct!
      userName: state => state.user.name,
      userId: state => state.user.id,
      categories: state => state.categories
    })
  }
</script>
