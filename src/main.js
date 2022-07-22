import { createApp } from "vue";
import router from "./routes";
import store from "./store";
import "./routes/guards";
import App from "./App.vue";

import { Buffer } from "buffer";
import EventEmitter from "events";
import process from "process";

// sax.js needs these
window.Buffer = Buffer;
window.EventEmitter = EventEmitter;
window.process = process;

createApp(App).use(router).use(store).mount("#app");
