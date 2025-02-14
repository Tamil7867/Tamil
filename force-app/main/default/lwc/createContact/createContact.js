import { LightningElement } from 'lwc';
import CONTACT_OBJ from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import DOB_FIELD from  '@salesforce/schema/Contact.DOB__c';
import DEPARTMENT_FIELD from '@salesforce/schema/Contact.Department';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateContact extends LightningElement {
    objectApiName=CONTACT_OBJ;
    
    fields=[FIRSTNAME_FIELD, LASTNAME_FIELD, PHONE_FIELD, EMAIL_FIELD, DOB_FIELD, DEPARTMENT_FIELD];

    handleSuccess(event){
        this.dispatchEvent(new ShowToastEvent({
            title: "Success",
            message: "Contact Record Created",
            variant: "success"
        }));
    }
}


