import { LightningElement } from 'lwc';

export default class IndianMonumentsParent extends LightningElement {
    showMonuments;
    favSpots=[];
    handleClickShowMonuments(event){
        this.showMonuments=true;
    }
    handleCancel(event){
        this.showMonuments=false;
        this.favSpots=[...event.detail];
        
    }
    get isNofavSpots(){
        return this.favSpots.length>0;
    }
}