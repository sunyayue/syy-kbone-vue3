import { createApp } from "vue";
import App from "./App.vue";
import { changeRem } from "@/assets/js/init";

window.VUE_APP_MP = "";
changeRem();
window.onresize = () => {
  changeRem();
};
createApp(App).mount("#app");
