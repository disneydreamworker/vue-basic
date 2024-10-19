import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Then import Bootstrap and BootstrapVue SCSS files (order is important)
import "node_modules/bootstrap/scss/bootstrap.scss";
import "node_modules/bootstrap-vue/src/index.scss";

import router from "./router";

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
