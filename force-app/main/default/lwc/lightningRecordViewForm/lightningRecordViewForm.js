import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Blood_Donor__c.Name__c';
import BLOODGROUP_FIELD from '@salesforce/schema/Blood_Donor__c.Blood_Group__c';
import AGE_FIELD from '@salesforce/schema/Blood_Donor__c.Age__c';
import EMAIL_FIELD from '@salesforce/schema/Blood_Donor__c.Email_ID__c';
import PHONE_FIELD from '@salesforce/schema/Blood_Donor__c.Phone_No__c';
import LASTDONATEDDATE_FIELD from '@salesforce/schema/Blood_Donor__c.Last_Donated_date__c';
export default class LightningRecordViewForm extends LightningElement {
    @api objectApiName;
    @api recordId;
    name=NAME_FIELD;
    bloodGroup=BLOODGROUP_FIELD;
    age=AGE_FIELD;
    email=EMAIL_FIELD;
    phone=PHONE_FIELD;
    lastDonatedDate=LASTDONATEDDATE_FIELD;
}