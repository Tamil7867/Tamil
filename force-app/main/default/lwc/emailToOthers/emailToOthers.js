import { LightningElement, api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class EmailToOthers extends NavigationMixin(LightningElement) {
    
    connectedCallback(){
        this.invoke();
    }

    @api recordId;
    
    @api invoke() {
        var pageRef = {
            type: "standard__quickAction",
            attributes: {
                apiName:"Case.SendEmail"
            },
            state: {
                recordId: this.recordId,
                defaultFieldValues:
                    encodeDefaultFieldValues({
                        HtmlBody: "Default values from Quick Action.",
                        Subject:"Hello from Tamil"
                    })
            }
        };
        this[NavigationMixin.Navigate](pageRef);
    } 
    
}