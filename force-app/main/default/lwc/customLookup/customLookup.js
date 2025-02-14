import { LightningElement, api } from 'lwc';
import ACCOUNTNAME_FIELD from '@salesforce/schema/Contact.AccountId';
import ACCOUNTADDRESS_FIELD from '@salesforce/schema/Account.BillingAddress';
export default class CustomLookup extends LightningElement {
    lookupField=ACCOUNTNAME_FIELD;
    addressField=ACCOUNTADDRESS_FIELD;
    @api recordId;
    @api objectApiName;
}