import axios from 'axios'
import { Notify } from 'quasar'

axios.defaults.baseURL = 'http://' + window.location.hostname + ':3000/api'
axios.defaults.withCredentials = true

const updateFilelist = async ({ commit }) => {
  try {
    const rtdata = []
    const files = await axios.get('/filelist')
    if (files.data) {
      files.data.forEach((file, index) => {
        file.index = index + 1
        rtdata.push(file)
      })
    }
    commit('updateFilelist', rtdata)
  } catch (err) {
    console.error(err)
    if (err.response.status === 403) {
      commit('user/authUser', null)
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        timeout: 1000,
        icon: 'warning',
        message: 'Plase login!'
      })
    }
  }
}

const refreshFilelist = async ({ commit }) => {
  try {
    const rtdata = []
    const files = await axios.get('/rffiles')
    files.data.forEach((file, index) => {
      file.index = index + 1
      rtdata.push(file)
    })
    commit('updateFilelist', rtdata)
  } catch (err) {
    if (err.response.status === 403) {
      commit('user/authUser', null)
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        timeout: 1000,
        icon: 'warning',
        message: 'Plase login!'
      })
    }
  }
}

export {
  updateFilelist,
  refreshFilelist
}
