import { LightningElement } from 'lwc';
import ACCOUNT_OBJ from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LightningRecordEditForm extends LightningElement {
    account=ACCOUNT_OBJ;
    recordId='0012w000014q6tWAAQ';
    fields={
        name: NAME_FIELD,
        industry: INDUSTRY_FIELD,
        phone: PHONE_FIELD,
        annualRevenue: ANNUALREVENUE_FIELD
    }   
    submitHandler(event){
        event.preventDefault(); //stop default behaviour of submiting form
        console.log('1.inside submit handler');
        //here we can do custom validation from the user input
        //1. get the input value 2.validate with the condition 3. manually submit form to server 
        const inputRevenue=this.refs.revenue; //1. get the input value
        if(inputRevenue.value<100){             //2.validate with the condition
            this.dispatchEvent(new ShowToastEvent({
                title: "Annual Revenue Can't be less than 100",
                message: event.detail.message,
                variant: "error"
            }));
        }else{
            const fields=event.detail.fields;
            this.template.querySelector('lightning-record-edit-form').submit(fields); //3.manually submiting form to server
        }
    }
    successHandler(event){
        console.log('2.inside success handler');
        this.dispatchEvent(new ShowToastEvent({
            title: "Record Updated",
            message: event.detail.message,
            variant: "success"
        }));
    }
    errorHandler(event){
        console.log('inside error handler');
        this.dispatchEvent(new ShowToastEvent({
            title: "Error Creating Data",
            message: event.detail.message,
            variant: "error"
        }));
    }
    handlePhoneChange(event){
        this.fields.phone=event.target.value;
    }
}