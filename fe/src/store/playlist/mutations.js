const setPlaylistName = (state, payload) => {
  state.playlistName = payload
}

const updatePlaylist = (state, payload) => {
  state.curPlaylist = payload
}

const addPlaylist = (state, payload) => {
  state.curPlaylist.push(payload)
}

export {
  setPlaylistName,
  updatePlaylist,
  addPlaylist
}
