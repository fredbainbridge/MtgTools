import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Card } from '../classes'


@Component
export default class CardsComponent extends Vue {
    cards: Card[] = [];

    mounted() {
        fetch('/Card')
            .then(response => response.json() as Promise<Card[]>)
            .then(data => {
                this.cards = data;
            });
    }
}