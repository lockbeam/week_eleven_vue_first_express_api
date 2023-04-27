import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from '@/services/HelloAPI'
//importing the things that are exported from HelloAPI.js
//which is an object containing methods which include our get hello message

let app = createApp(App)

// app is now a variable so we can add the api service to it:
app.config.globalProperties.$hello_api = HelloAPI
//app.config.globalProperties is built into Vue
//we're creating a new property called hello_api

app.mount('#app')
// the div hosting the app is in index.html
