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
            dropzoneSelector: 'div',
            draggableSelector: 'img',
            multipleDropzonesItemsDraggingEnabled: true,
            showDropzoneAreas: true,
            onDrop: function(event: any){
                //alert(event.droptarget)
                this.$forceUpdate();
            },
            //onDragstart: function(event) {},
            //onDragend: 
          }
        fetch('/Sealed?ID=' + this.sealedid)
            .then(response => response.json() as Promise<Card[]>)
            .then(data => {
                this.cards = data;
            });
    }
    cardDrop(){
        
    };
}
