import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Andrew White' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    // Setup a getter to get the length of our categories.
    // This can be accessed form any component in our app as its stored
    // on our store!
    catLength: state => {
      return state.categories.length
    }
  }
})
