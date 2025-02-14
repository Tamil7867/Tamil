import { LightningElement, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import RECEIPT_OBJ from '@salesforce/schema/Receipt__c';
import CONTACT_LOOKUP from '@salesforce/schema/Receipt__c.Consumer__c';
import AMOUNT_FIELD from '@salesforce/schema/Receipt__c.Amount__c';
import MODEOFPAYMENT_FIELD from '@salesforce/schema/Receipt__c.Mode_of_Payment__c';
import PAIDDATE_FIELD from '@salesforce/schema/Receipt__c.Paid_Date__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ReceiptModal extends LightningElement {
    
    @api conRecordId;
    amount;
    mode;
    date;
    
    handleChange(event){
        if(event.target.name=='amount'){
            this.amount=event.target.value;
        }else if(event.target.name=='date'){
            this.date=event.targert.value;
        }else if(event.target.name=='mode'){
            this.mode=event.target.value;
        }
        
        
    }

    async handleSubmit(event){
        const fields={};

        fields[AMOUNT_FIELD.fieldApiName]=this.amount;
        fields[CONTACT_LOOKUP.fieldApiName]=this.conRecordId;
        fields[MODEOFPAYMENT_FIELD.fieldApiName]=this.mode;
        fields[PAIDDATE_FIELD.fieldApiName]=this.date;

        const recordInput={apiName: RECEIPT_OBJ.objectApiName, fields}
        
        await createRecord(recordInput).then((r)=>console.log(r)).catch((r)=>console.log(r))

        this.dispatchEvent(new ShowToastEvent({
                    title: "Success",
                    message: "Receipt Created",
                    variant: "success"
                }));
                this.dispatchEvent(new CustomEvent("close"));
    }

}