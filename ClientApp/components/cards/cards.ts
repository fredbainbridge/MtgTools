import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface Card {
    id: number;
    multiVerseID: string;
    name: string;
    cost: string;
    type: string;
    power: string;
    toughness: string;
    text: string;
    set: number;
    rarity: string;
    ctype: string;
    convertedManaCost: number;
    imageURL: string;
    colorIdentity: string;
}

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