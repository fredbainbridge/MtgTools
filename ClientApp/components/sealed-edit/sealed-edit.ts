import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Card } from '../classes';
import { default as BoosterSelection } from '../booster-selection/booster-selection'

@Component({
    components: {
        cardcomponent: require('../card/card.vue.html').default
    }
})
export default class SealedNewComponent extends Vue {
    @Prop()
    cards!: Card[];
}
