import { LightningElement, api, wire, track } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import COMPLAINT_NAME_FIELD from "@salesforce/schema/Account.Name";
import ACCOUNT_FIELD from "@salesforce/schema/Account.AnnualRevenue";
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

const fields = [ 'Account.Name'];
export default class LogComplaintOnAccount extends LightningElement {
    showLogComplaint=false;
    @api recordId;
    accName;
    
    accountData;
    @wire(getRecord, { recordId: '$recordId', fields: fields })
    wiredAccount({ error, data }) {
        if (data) {
            this.accName = data.fields.Name.value;
            
            console.log('Account Record Data: ', data);
            this.accountData=data;
        } else if (error) {
            console.error('Error: ', error);
        }
    }

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfoHandler({ error, data }) {
        if (data) {
            console.log('Account Object Data: ', data);
        } else if (error) {
            console.error('Error: ', error);
    }
    }

    
    handleLogComplaint(event){
        this.showLogComplaint=true;
        
    }

    
}