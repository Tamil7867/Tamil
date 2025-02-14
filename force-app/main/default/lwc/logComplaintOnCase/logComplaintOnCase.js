import { LightningElement, api, wire } from 'lwc';
import { getRecord} from 'lightning/uiRecordApi';
import ACCOUNTID_FIELD from '@salesforce/schema/Case.AccountId';
    const fields = [ 'Case.AccountId'];
    const accfields = [ 'Account.Name'];
export default class LogComplaintOnCase extends LightningElement {
    @api recordId;
    accRecordId;
    accName;
    showLogComplaint=false;

    @wire(getRecord, { recordId: '$recordId', fields: fields })
    wiredCase({ error, data }) {
        if (data) {
            this.accRecordId = data.fields.AccountId.value;
            console.log('Case Record Data: ', data);
        } else if (error) {
            console.error('Error: ', error);
        }
    }

    @wire(getRecord, { recordId: '$accRecordId', fields: accfields })
    wiredAccount({ error, data }) {
        if (data) {
            this.accName = data.fields.Name.value;
            console.log('Account Record Data: ', data);
        } else if (error) {
            console.error('Error: ', error);
        }
    }
    handleLogComplaint(event){
        this.showLogComplaint=true;
    }
}