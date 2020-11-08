import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      //
    },
    state: {
      authUser: null,
      playlistId: 'Playlist 1',
      filelist: []
    },
    mutations: {
      setUser (state, payload) {
        state.authUser = payload
      },
      setPlaylistId (state, payload) {
        state.playlistId = payload
      },
      updateFilelist (state, payload) {
        state.filelist = payload
      }
    },
    actions: {
      setUser ({ commit }, payload) {
        commit('setUser', payload)
      },
      setPlaylistId ({ commit }, payload) {
        commit('setPlaylistId', payload)
      },
      updateFilelist ({ commit }, payload) {
        commit('updateFilelist', payload)
      }
    },
    strict: process.env.DEBUGGING
  })

  return Store
}
