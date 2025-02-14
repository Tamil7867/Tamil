import { LightningElement, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import COMPLAINT_OBJ from '@salesforce/schema/Complaint__c';
import CASE_LOOKUP from '@salesforce/schema/Complaint__c.Case__c';
import ACCOUNT_LOOKUP from '@salesforce/schema/Complaint__c.Account__c';
import COMPLAINT_NAME from '@salesforce/schema/Complaint__c.Name';
import ISSUE_FIELD from '@salesforce/schema/Complaint__c.Issue__c';
import DESCRIPTION_FIELD from '@salesforce/schema/Complaint__c.Comments__c';
import RESOLUTION_FIELD from '@salesforce/schema/Complaint__c.Resolution__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LogComplaint extends LightningElement {
            static complaintCount=1;
    options=[{label:'Product Issue',value:'Product Issue'},
            {label:'Technician Issue',value:'Technician Issue'},
            {label:'Logistics Issue',value:'Logistics Issue'}];
            @api caseId;
            @api accountId;
            @api accountName;
            complaintName;
            selectedOption;
            description;
            resolution;
            handleOptionsChange(event){
                this.selectedOption=event.detail.value;
                
                if (this.selectedOption && this.accountName) {
                    this.complaintName = `${this.accountName} - ${this.selectedOption} - 
                                            ${LogComplaint.complaintCount}`;
                }
                
            }
            handleDescriptionChange(event){
                this.description=event.target.value;
            }
            handleResolutionChange(event){
                this.resolution=event.target.value;
            }

           async handleSubmit(){
                if(this.selectedOption && this.description){
                    console.log('Selected Value: '+this.selectedOption);
                    console.log('Description: '+this.description);

                    const fields={};
                    fields[CASE_LOOKUP.fieldApiName]=this.caseId;
                    fields[ACCOUNT_LOOKUP.fieldApiName]=this.accountId;
                    fields[COMPLAINT_NAME.fieldApiName]=this.complaintName;
                    fields[ISSUE_FIELD.fieldApiName]=this.selectedOption;
                    fields[DESCRIPTION_FIELD.fieldApiName]=this.description;
                    fields[RESOLUTION_FIELD.fieldApiName]=this.resolution;
                    
                    const recordInput={apiName: COMPLAINT_OBJ.objectApiName, fields}
                    await createRecord(recordInput)
                    .then((r) => {
                        console.log(r);
                        LogComplaint.complaintCount++; // Increment the count after successful record creation
                        this.dispatchEvent(new ShowToastEvent({
                            title: "Success",
                            message: "Complaint Logged",
                            variant: "success"
                        }));
                    })
                    .catch((r) => 
                    {
                        console.log(r);
                        this.dispatchEvent(new ShowToastEvent({
                            title: "Error",
                            message: "Error Logging Complaint",
                            variant: "error"
                        }));
                    });
                    this.selectedOption=undefined;
                    this.description=undefined;
                    this.resolution=undefined;
                }
            }
}