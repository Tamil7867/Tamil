import { LightningElement } from 'lwc';
import getAccountByName from '@salesforce/apex/AccountController.getAccountByName';
export default class AccountSearch extends LightningElement {
    accName;
    accData;
    columList=[{label:'Account ID', fieldName:'Id'},
        {label:'Name', fieldName:'Name'},
        {label:'Account Number', fieldName:'AccountNumber'},
        {label:'Billing State', fieldName:'BillingState'}
    ]
    handleChange(event){
        this.accName=event.target.value;
        console.log(this.accName)
    }

    async handleClick(event){ 
        await getAccountByName({name:this.accName}).then((res)=>{
            this.accData=res;
            console.log(this.accData)
        })
    }
}