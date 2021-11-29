<template>
  <div>
    <h1>Events Listing</h1>
    <!-- Pass each 'event' as a prop to the EventCard component -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: [] // populated by the response from our axios call
    }
  },
  created() {
    axios
      .get('http://localhost:3000/events')
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.error('There was an error: ', error.response)
      })
  }
}
</script>
