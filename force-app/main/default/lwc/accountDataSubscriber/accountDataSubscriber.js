import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/MessageChannel__c";
import { publish,subscribe,unsubscribe,MessageContext,APPLICATION_SCOPE } from 'lightning/messageService';
export default class AccountDataSubscriber extends LightningElement {
    @wire(MessageContext)
    context;

    accRec;
    connectedCallback(){
        this.subscribeMeg();
    }

    subscribeMeg(){
        subscribe(this.context, SAMPLEMC, (message)=>{this.handleIncomingMeg(message)},{scope:APPLICATION_SCOPE})
    }

    handleIncomingMeg(message){
        this.accRec=message.messageToSend.value? message.messageToSend.value : 'No Meg';
        console.log(this.accRec)
    }
}