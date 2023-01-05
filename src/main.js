import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'

// bottom navbar component
import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import './assets/main.css'

// load in data from all json files
import tomatoData from './json/tomato.json';
import carrotData from './json/carrot.json';
import lettuceData from './json/lettuce.json';
import broccoliData from './json/broccoli.json';
import mixedData from './json/mixed.json';
import allData from './json/all.json';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import {faBookOpen} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-solid-svg-icons"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"

/* add icons to the library */
library.add(faLeaf, faBookOpen, faBell, faArrowLeft)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(bottomNavigationVue)
app.use(BootstrapVue3)
app.config.globalProperties.$tomatoData = tomatoData;
app.config.globalProperties.$carrotData = carrotData;
app.config.globalProperties.$lettuceData = lettuceData;
app.config.globalProperties.$broccoliData = broccoliData;
app.config.globalProperties.$mixedData = mixedData;
app.config.globalProperties.$allData = allData;
app.config.globalProperties.$userName = "Danny!";
app.config.globalProperties.$searchTerms = " ";

// dynamically load in images
app.config.globalProperties.getImageUrl = function getImageUrl(name) {
  return new URL(`/src/assets/${name}`, import.meta.url).href
}



app.mount('#app')
