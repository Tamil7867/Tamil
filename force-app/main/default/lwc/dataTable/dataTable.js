import { LightningElement, wire } from 'lwc';
import getAccountsList from '@salesforce/apex/AccountController.getAccountsList';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
export default class DataTable extends LightningElement {
    accountData;
    wiredAccountData;
    columnList=[
        {label: 'Id', fieldName: 'Id'},
        {label: 'Name', fieldName: 'Name'},
        {label: 'Rating', fieldName: 'Rating'},
        {label: 'Industry', fieldName: 'Industry'},
        {label: 'Revenue', fieldName: 'AnnualRevenue'},
        {
            label:'Delete', type:'button-icon', typeAttributes:{
                iconName:'utility:delete', title:'delete', variant:'brand'
            }
        }
    ]

    @wire(getAccountsList)
    getAccountHandler(response){
        this.wiredAccountData=response;
        if(response.data){
            this.accountData=response.data;
        }
    }

    handleRowAction(event){
        console.log(event.detail)
        console.log(event.detail.action)
        console.log(event.detail.row)
        const recordId= event.detail.row.Id;
        deleteRecord(recordId).then(rec=>{
            this.dispatchEvent(new ShowToastEvent({
                title: "Success",
                message: "Record Deleted",
                variant: "success"
            }));
            refreshApex(this.wiredAccountData);
        })
        
    }
}