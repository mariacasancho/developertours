import Vue from "vue";
import Vuex from "vuex";

import Locations from "./modules/Locations";
import Hotels from "./modules/Hotels";

Vue.use(Vuex);

console.log(Locations);
export default new Vuex.Store({
    modules: {
        Hotels,
        Locations
    }
});
