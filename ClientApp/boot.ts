import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html').default },
    { path: '/counter', component: require('./components/counter/counter.vue.html').default },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html').default },
    { path: '/cards', component: require('./components/cards/cards.vue.html').default },
    { path: '/boosters', component: require('./components/boosters/boosters.vue.html').default },
    { 
        path: '/sealed-edit/:sealedid', 
        component: require('./components/sealed-edit/sealed-edit.vue.html').default,
        props: true
    },
    {
        path: '/sealed-new', 
        component: require('./components/sealed-new/sealed-new.vue.html').default
    }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html').default)
});