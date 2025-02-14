import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
export default class WireAdapters extends LightningElement {
    accountData;
    userData;
    userId=Id;
    //@wire(getRecord,{recordId:'0012w000014q6tVAAQ' ,fields:['Account.Name', 'Account.Industry']}) //this statement is async call  
    // getAccountRecord(response) // hence we need to store either using function or using property below the wire service
    // {
    //     if(response.data) //since wire method is async call initially response data will be undefined 
    //                     // so only when data is come then get inside the condition 
    //     {
    //         console.log(response);
    //         console.log(response.data);
    //         console.log(response.data.fields.Name.value);
    //         console.log(response.data.fields.Industry.value);
    //         this.accountData=response.data.fields; //this response store the result in object with property of data & error
    //     }
    // }

    @wire(getRecord,{recordId:'0012w000014q6tVAAQ' ,fields:['Account.Name', 'Account.Industry']})
    getAccountRecord({data, error}) //directly destructuring response object(this object have data and error property)
    {
        if(data){
            console.log(data);
            this.accountData=data.fields;
        }
        if(error){
            console.log(error);
        }
    }

    @wire (getRecord, {recordId: '$userId', fields:['User.Name', 'User.Email']})
    getUserRecord({data, error}){
        if(data){
            console.log(data);
            this.userData=data.fields;
        }
        if(error){
            console.log(error);
        }
    }
        
}