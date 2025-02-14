import { LightningElement, wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/AccountController.getAccountRecords';
export default class ApexInLwc extends LightningElement {
    accountData;
    ratingOptions=[
        {label:'Hot', value:'Hot'},
        {label:'Warm', value:'Warm'},
        {label:'Cold', value:'Cold'}
    ];
    rating;
    @wire(getAccountRecords,{rating:'$rating'})
    accountHandler({data, error}){
        console.log(data)
        if(data){
            this.accountData=Object.values(data).filter(rec=>rec.Rating===this.rating);
            
            // console.log('AccountData',this.accountData)
            
            // console.log('RatingOptions',this.ratingOptions)
        }
    }

    handleChangeRating(event){
        this.rating=event.target.value;
    }
}