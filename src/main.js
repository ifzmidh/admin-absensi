import "./assets/main.css";
import "primeicons/primeicons.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

import { createApp } from "vue";
import { createPinia } from "pinia";

// Primevue
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

// define component
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Password from "primevue/password";
import Menu from "primevue/menu";
import Tag from "primevue/Tag";
import PanelMenu from "primevue/PanelMenu";

app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("FloatLabel", FloatLabel);
app.component("InputText", InputText);
app.component("Password", Password);
app.component("Button", Button);
app.component("Menu", Menu);
app.component("PanelMenu", PanelMenu);
app.component("Tag", Tag);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".my-app-dark",
    },
  },
});
app.use(createPinia());
app.use(router);

app.mount("#app");
