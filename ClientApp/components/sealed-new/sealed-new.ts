import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Set, Booster } from '../classes';
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
            console.log(i.selectedset)
        }
        //boosterSelections.forEach(element => {
            
        //});
        //fetch('/booster/new/' + this.selected)
        //    .then((response) => { return response.json() as Promise<Booster[]> })
        //    .then(data => {
        //        this.booster = data;
        //    });
    }
}
