import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Card } from '../classes'


@Component
export default class CardsComponent extends Vue {
    @Prop()
    card!: Card;
    imageUrl: string = ""; 
    
    mounted() {
        this.imageUrl = "/media/" + this.card.multiVerseID + ".png"
    }
}