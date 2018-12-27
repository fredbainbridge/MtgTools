import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Set, Card, Booster } from '../classes'


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
        fetch('booster/new/' + this.selected)
            .then(response => response.json() as Promise<Booster[]>)
            .then(data => {
                this.booster = data;
                this.hasBooster = true;
                
            });
    }

    get boosterCards(): Card[] {
        return this.booster[0].cards;
    }
}