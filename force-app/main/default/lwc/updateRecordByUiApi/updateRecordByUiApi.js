import { LightningElement } from 'lwc';
import RECORD_ID from '@salesforce/schema/Account.Id';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import {updateRecord} from 'lightning/uiRecordApi';
export default class UpdateRecordByUiApi extends LightningElement {
    recordId;
    name;
    industry;
    revenue;

    formData={}


    handleChange(event){
        
        // const {name, value}=event.target;
        // this.formData[name]=value;
        if(event.target.name==='recordId'){
            this.recordId=event.target.value;
        }else if(event.target.name==='name'){
            this.name=event.target.value;
        }else if(event.target.name==='industry'){
            this.industry=event.target.value;
        }else if(event.target.name==='revenue'){
            this.revenue=event.target.value;
        }

        console.log(this.formData)


    }

    handleClickUpdate(event){
        this.formData[RECORD_ID.fieldApiName]=this.recordId;
        this.formData[NAME_FIELD.fieldApiName]=this.name;
        this.formData[INDUSTRY_FIELD.fieldApiName]=this.industry;
        this.formData[REVENUE_FIELD.fieldApiName]=this.revenue;
        
        const updateInputRecord={
            fields: this.formData
        }
        updateRecord(updateInputRecord).then(rec=> {
            console.log(rec);
        })
    }
    handleClickClear(event){
        this.recordId=null;
        this.name=null;
        this.industry=null;
        this.revenue=null;
    }
}