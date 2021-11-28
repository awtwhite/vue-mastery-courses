import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // Supported by IE10 and up.
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id', // Dynamic route ':id'
      name: 'event-show',
      component: EventShow,
      props: true // Pass our dynamic route value as a prop to components.
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    }
  ]
})
