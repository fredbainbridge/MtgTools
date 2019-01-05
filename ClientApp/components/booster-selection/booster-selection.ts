import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Set } from '../classes'

@Component
export default class BoosterSelectionComponent extends Vue {
    @Prop({ type: Array })
    sets!: Set[]
    @Prop({ type: String, default: null})
    label!: String;
    selectedset: string = '';
    name: string = 'is-name';
    onChange() {
        this.$emit('setchanged',this.selectedset)
    }
    /*
    
    mounted() {
        fetch('/Card/AvailableSets')
            .then(response => response.json() as Promise<Set[]>)
            .then(data => {
                this.sets = data;
            });
    }
    */
}