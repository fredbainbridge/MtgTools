import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') },
    { path: '/cards', component: require('./components/cards/cards.vue.html') },
    { path: '/boosters', component: require('./components/boosters/boosters.vue.html') },
    { path: '/sealed-new', component: require('./components/sealed-new/sealed-new.vue.html')},
    { path: '/booster-selection', component: require('./components/booster-selection/booster-selection.vue.html')}
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});