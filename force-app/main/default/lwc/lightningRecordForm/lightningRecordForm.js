import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class LightningRecordForm extends LightningElement {
@api objectApiName;
@api recordId;
handleSuccess(event){
    const myToast = new ShowToastEvent(
        {
            title:'Success',
            message: 'updated case',
            variant: 'success'
        }
    )
    this.dispatchEvent(myToast);
}
}