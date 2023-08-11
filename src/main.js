import './assets/main.css'

import { createApp } from 'vue'

import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

import Button from "primevue/button"

const app = createApp(App)

app.use(router)

app.use(PrimeVue, { unstyled: false });


app.component('Button', Button);

app.mount('#app')


//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

