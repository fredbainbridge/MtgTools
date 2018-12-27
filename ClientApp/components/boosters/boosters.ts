import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface Set {
    id: number;
    name: string;
}

interface Card {
    id: number;
    multiVerseID: string;
    name: string;
    cost: string;
    type: string;
    power: string;
    toughness: string;
    text: string;
    set: Set;
    rarity: string;
    ctype: string;
    convertedManaCost: number;
    imageURL: string;
    colorIdentity: string;
}
interface Booster {
    id: number;
    set: Set;
    cards: string[];
}

@Component
export default class BoostersComponent extends Vue {
    sets: Set[] = [];
    cards: Card[] = [];
    selected: string = '';
    booster: Booster[] = [];

    mounted() {
        fetch('/Card/AvailableSets')
            .then(response => response.json() as Promise<Set[]>)
            .then(data => {
                this.sets = data;
            });
    }
    newBooster(){
        fetch('booster/new/' + this.selected)
            .then(response => response.json() as Promise<Booster[]>)
            .then(data => {
                this.booster = data;
            });
    }
}