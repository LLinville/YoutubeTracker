import Vue from 'vue';
import App from './App.vue';
import VueGapi from 'vue-gapi';

const apiConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  clientId: '561640955159-j0f3d4nqanifhan9uct5r3br8rreqi4u.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
};

// Use the plugin and pass along the configuration
Vue.use(VueGapi, apiConfig);

new Vue({
  el: '#app',
  render: h => h(App),
});