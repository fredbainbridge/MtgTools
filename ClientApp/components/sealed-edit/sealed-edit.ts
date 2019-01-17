import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Card } from '../classes';
import VueDraggable from 'vue-draggable'
Vue.use(VueDraggable);
@Component({
    components: {
        cardcomponent: require('../card/card.vue.html').default
    }
})
export default class SealedEditComponent extends Vue {
    @Prop()
    sealedid!: number;
    cards: Card[] = [];
    options: any;

    mounted(){
        this.options = {
            dropzoneSelector: 'ul',
            draggableSelector: 'li',
            multipleDropzonesItemsDraggingEnabled: true,
            showDropzoneAreas: true,
            //onDrop: function(event) {},
            //onDragstart: function(event) {},
            //onDragend: function(event) {}
          }
        fetch('/Sealed?ID=' + this.sealedid)
            .then(response => response.json() as Promise<Card[]>)
            .then(data => {
                this.cards = data;
            });
    }
}
