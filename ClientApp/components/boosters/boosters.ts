import Vue from 'vue';
import { Component } from 'vue-property-decorator';
//import { Set, Card, Booster } from '../classes'

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
    cards: Card[];
}

@Component
export default class BoostersComponent extends Vue {
    sets: Set[] = [];
    selected: string = '';
    booster: Booster[] = [];
    hasBooster: boolean = false;

    mounted() {
        fetch('/Card/AvailableSets')
            .then(response => response.json() as Promise<Set[]>)
            .then(data => {
                this.sets = data;
                this.hasBooster = false;
            });
    }
    newBooster(){
        fetch('/booster/new/' + this.selected)
            .then((response) => {return response.json() as Promise<Booster[]>})
            .then(data => {
                this.booster = data;
                this.hasBooster = true;
                
            });
    }
}