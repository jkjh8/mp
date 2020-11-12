import axios from 'axios'
import { Notify } from 'quasar'

axios.defaults.baseURL = 'http://' + window.location.hostname + ':3000/api'
axios.defaults.withCredentials = true

const setPlaylistName = ({ commit }, payload) => {
  commit('setPlaylistName', payload)
}

const reqPlaylist = async ({ commit, getters }) => {
  try {
    const files = await axios.get(`/playlist/${getters.playlistId - 1}`)
    commit('updatePlaylist', files.data)
  } catch (err) {
    Notify.create({
      color: 'red-5',
      textColor: 'white',
      timeout: 1000,
      icon: 'warning',
      message: err
    })
  }
}

const addPlaylist = async ({ state, getters }, payload) => {
  const rtlist = []
  let index = state.curPlaylist.length
  await payload.forEach((file) => {
    file.playid = index
    rtlist.push(file)
    index = index + 1
  })
  try {
    await axios.post('/playlist/update', { id: getters.playlistId - 1, list: rtlist })
  } catch (err) {
    Notify.create({ color: 'red-5', textColor: 'white', timeout: 1000, icon: 'warning', message: err })
    console.log(err.response)
  }
}

const rebuildPlaylist = async ({ state, getters, commit }) => {
  const reindex = []
  await state.curPlaylist.forEach((file, index) => {
    file.playid = index
    reindex.push(file)
  })
  try {
    const rtData = await axios.post('/playlist', { id: getters.playlistId - 1, list: reindex })
    console.log(rtData)
    commit('updatePlaylist', rtData.data)
  } catch (err) {
    Notify.create({
      color: 'red-5',
      textColor: 'white',
      timeout: 1000,
      icon: 'warning',
      message: err
    })
  }
}

export {
  setPlaylistName,
  reqPlaylist,
  addPlaylist,
  rebuildPlaylist
}
