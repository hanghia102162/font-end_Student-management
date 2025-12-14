// src/plugins/icons.js
import * as HeroIcons from "@heroicons/vue/24/solid";

export default {
  install(app) {
    Object.entries(HeroIcons).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};
