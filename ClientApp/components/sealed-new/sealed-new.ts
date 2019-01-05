import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Set, Booster, Card } from '../classes';
import { default as BoosterSelection } from '../booster-selection/booster-selection'

@Component({
    components: {
        boosterselectioncomponent: require('../booster-selection/booster-selection.vue.html').default
    }
})
export default class SealedNewComponent extends Vue {
    sets: Set[] = [];
    selected: string = '';
    booster: Booster[] = [];
    numboosters: number = 6;
    cards: Card[] = [];
    isNotPartOfSealed: string = 'isNotPartOfSealed';

    mounted() {
        fetch('/Card/AvailableSets')
            .then(response => response.json() as Promise<Set[]>)
            .then(data => {
                this.sets = data;
            });
    }
    newSealed() {
        var boosterSelections = this.$children as BoosterSelection[]
        for (let i of boosterSelections) {
            if(i.label != "isNotPartOfSealed") {
                fetch('/booster/new/' + i.selectedset)
                .then((response) => { return response.json() as Promise<Booster[]> })
                .then(data => {

                    this.booster.concat(data);
                });
            }
        }
        for(let b of this.booster) {
            this.cards.concat(b.cards);
        }
    }
    changesets(setname: string){
        var boosterSelections = this.$children as BoosterSelection[];
        for (let i of boosterSelections) {
            i.selectedset = setname
        }
    }
}
