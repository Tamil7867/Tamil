import { LightningElement, api, wire, track } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import REVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

import getComplaintRecords from '@salesforce/apex/ComplaintController.getComplaintRecords';
const fields = [ 'Account.Name'];
export default class LogComplaintOnAccount extends LightningElement {
    showLogComplaint=false;
    showComplaintsRecords=true;
    @api recordId;
    @api objectApiName;
    accName;
    accountData;
    @track complaintRecords;

    
    @wire(getComplaintRecords, { accountId: '$recordId' })
    wiredComplaintRecords({ error, data }) {
        if (data) {
            
            this.complaintRecords = data;
            console.log('Complaint Records: ', data);
        } else if (error) {
            console.error('Error: ', error);
        }
    }

    handleLogComplaint(event){
        this.showLogComplaint=true;
        
    }

    
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
    //the below code is my understanding of getObjectInfo
    // @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    // objectInfoHandler({ error, data }) {
    //     if (data) {
    //         console.log('Account Object Data: ', data);
    //     } else if (error) {
    //         console.error('Error: ', error);
    //     }
    // }

    
    

    
}