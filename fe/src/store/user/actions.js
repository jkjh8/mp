import axios from 'axios'
import { Notify } from 'quasar'

axios.defaults.baseURL = 'http://' + window.location.hostname + ':3000/api'
axios.defaults.withCredentials = true

const getUser = ({ commit }) => {
  axios.get('/login').then((res) => {
    if (res.data.user) {
      commit('setUser', res.data.user)
    } else {
      commit('setUser', null)
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        timeout: 1000,
        icon: 'warning',
        message: 'Plase login!'
      })
    }
  })
}

const setUser = ({ commit }, payload) => {
  commit('setUser', payload)
}

export {
  getUser,
  setUser
}
