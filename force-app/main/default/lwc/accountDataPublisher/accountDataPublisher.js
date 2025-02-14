import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/MessageChannel__c";
import { publish,subscribe,unsubscribe,MessageContext,APPLICATION_SCOPE } from 'lightning/messageService';
import getAccountRecords from '@salesforce/apex/AccountController.getAccountRecords';
export default class AccountDataPublisher extends LightningElement {
    accountData;
    rating;
    ratingOptions=[
        {label:'Hot', value:'Hot'},
        {label:'Warm', value:'Warm'},
        {label:'Cold', value:'Cold'}
    ];

    @wire(MessageContext)
    context;

    handleChange(event){
        this.rating=event.target.value;
        console.log(this.rating)
    }

    async handleClick(event){
       await getAccountRecords({rating:this.rating}).then((res)=>{
            this.accountData=res;
            console.log(this.accountData);
        })

        const msg={
            messageToSend: {
                value: this.accountData   
            }
        }

        publish(this.context,SAMPLEMC,msg);
    }
}