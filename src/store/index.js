import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beer: null,
    user: null,
  },
  getters: {
    getBeer: state => state.beer,
    getUser: state => state.user,
  },
  mutations: {
    setBeer(state, data) {
      state.beer = data
    },

    setUser(state, data) {
      state.user = data;
      state.user.age = 28;
      let date = new Date;

      date.getMonth() - data.date_of_birth.split('-')[1] > 0
        ? state.user.age = date.getFullYear() - data.date_of_birth.split('-')[0]
        : state.user.age = date.getFullYear() - data.date_of_birth.split('-')[0] - 1
    },
  },
  actions: {
    beerRequest({commit}) {
      axios
        .get('https://random-data-api.com/api/beer/random_beer')
        .then(({ data }) => {
            commit('setBeer', data)
        })
        .catch(e => console.log(e))
    },

    userRequest({commit}) {
      axios
        .get('https://random-data-api.com/api/users/random_user')
        .then(({ data }) => {
            commit('setUser', data)
        })
        .catch(e => console.log(e))
    }
  },
})
