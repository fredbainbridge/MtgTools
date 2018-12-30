import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Set } from '../classes'

@Component
export default class BoosterSelectionComponent extends Vue {
    @Prop({ default: 0 })
    boosternum: number;
    sets: Set[] = [];
    selectedset: string = '';
    
    mounted() {
        fetch('/Card/AvailableSets')
            .then(response => response.json() as Promise<Set[]>)
            .then(data => {
                this.sets = data;
            });
    }
}