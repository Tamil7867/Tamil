import { LightningElement, api } from 'lwc';

export default class Receipt extends LightningElement {
    showModal=false;
    @api recordId;
    conRecId;
    
    handleClick(event){
        this.showModal=true;
        this.conRecId=this.recordId
        console.log('contact record id', this.conRecId)
    }

    handleClose(event){
        this.showModal=false;
    }
}