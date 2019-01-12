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
    numboosters: number = 6;
    isNotPartOfSealed: string = 'isNotPartOfSealed';
    sealedID: number = 0;
    loading: number = 0;

    mounted() {
        fetch('/Card/AvailableSets')
            .then(response => response.json() as Promise<Set[]>)
            .then(data => {
                this.sets = data;
            });
    }
    newSealed() {
        this.loading = 1;
        var boosterSelections = this.$children as BoosterSelection[]
        var sets: Set [] = [];
        
        for (let i of boosterSelections) {
            if(i.label != "isNotPartOfSealed") {
                let tmpSet = {name: i.selectedset, id: 0 };
                sets.push(tmpSet);
            }
        }
        let requestHeaders: any = { 'Content-Type': 'application/json' };
        fetch('/sealed/new',{
                    headers: requestHeaders, 
                    body: JSON.stringify(sets),
                    method: "POST"
                })
                .then((response) => { 
                    this.loading = 1
                    return response.json() as Promise<number> 
                })
                .then(data => {
                    this.$router.push({
                        path: 'sealed-edit/' + data 
                   })
                });
        //this.gotosetedit()
    }
    
    gotosetedit() {
        
    }
    
    changesets(setname: string){
        var boosterSelections = this.$children as BoosterSelection[];
        for (let i of boosterSelections) {
            i.selectedset = setname
        }
    }
}
