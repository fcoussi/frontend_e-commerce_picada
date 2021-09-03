import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faHamburger,faUserCog,faBars, faTrashAlt,faEdit,faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'
import { IconStyle } from 'vuelayers'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  BootstrapVue from 'bootstrap-vue'

library.add(faCartPlus,faHamburger,faUserCog,faBars,faTrashAlt,faEdit,faPlusSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Agregamos la URL base de nuestra API
//axios.defaults.baseURL = 'http://localhost:4000/api';


Vue.use(BootstrapVue);
Vue.use(VueLayers)
Vue.use(IconStyle)
Vue.use(VueAxios, axios)


//AGREGAMOS LA URL BASE DE NUESTRA API
axios.defaults.baseURL = 'http://localhost:3000/api/consultas/';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
