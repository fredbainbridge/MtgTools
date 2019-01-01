import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import BootstrapVue from 'bootstrap-vue'
//import BoosterSelectionComponent from '../booster-selection/booster-selection'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue.html').default,
        BoosterSelectionComponent: require('../booster-selection/booster-selection.vue.html').default
    }
})
export default class AppComponent extends Vue {
}
//Vue.component('BoosterSelection', BoosterSelectionComponent)