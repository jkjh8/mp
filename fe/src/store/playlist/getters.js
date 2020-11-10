export function playlistId (state) {
  return state.playlistName.replace(/[^0-9]/g, '')
}
