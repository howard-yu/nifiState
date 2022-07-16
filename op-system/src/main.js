import { createApp } from "vue";
import App from "./App.vue";
import Antd from 'ant-design-vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';
import './index.css'
import VueAxios from 'vue-axios';
import axios from 'axios';
const app = createApp(App).use(Antd).use(store).use(VueAxios, axios);
app.mount("#app");
