import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

//primevue
import PrimeVue from 'primevue/config';

//theme
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'

//icons
import 'primeicons/primeicons.css'

//primefelx
import 'primeflex/primeflex.css'

//primevue components
import Button from 'primevue/button';
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Card from "primevue/card";
import Toolbar from 'primevue/toolbar';


const app=createApp(App)

app.use(PrimeVue, {ripple: true})
    .component('pv-button', Button)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-card', Card)
    .component('pv-toolbar', Toolbar)

app.mount('#app')

