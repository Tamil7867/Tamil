import { LightningElement } from 'lwc';

export default class IndianMonumentsChild extends LightningElement {
    favMonuments=[];
    handleClickCancel(event){
        const myEvent = new CustomEvent('cancel',{detail:this.favMonuments});
        this.dispatchEvent(myEvent);
        
    }
    handleChangeIndia(event){
        if(this.refs.india.checked){
            this.favMonuments=[...this.favMonuments,"India Gate"];
        }
    }
    handleChangeQutab(event){
        if(this.refs.qutub.checked){
            this.favMonuments=[...this.favMonuments,"Qutab Minar"];
        }
    }
    handleChangeTaj(event){
        if(this.refs.taj.checked){
            this.favMonuments=[...this.favMonuments,"Taj Mahal"];
        }
    }
}