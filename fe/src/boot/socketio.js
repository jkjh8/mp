import io from 'socket.io-client'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ Vue }) => {
  Vue.prototype.$socket = await io(`http://${window.location.hostname}:3000`)
}
