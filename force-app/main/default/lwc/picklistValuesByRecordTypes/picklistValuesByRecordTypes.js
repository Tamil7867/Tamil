import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getPicklistValues, getPicklistValuesByRecordType} from 'lightning/uiObjectInfoApi';
export default class PicklistValuesByRecordTypes extends LightningElement {
    recordTypeValue;
    picklistValue;
    recordTypeId;
    recordTypeOptions;
    recordTypePicklistValues;
    
    @wire(getObjectInfo, {objectApiName:'Account'})
    getObjectInfo({data, error}){
        if(data){
            console.log('objectInfo',data)
            //this.recordTypeId=data.defaultRecordTypeId;
            this.recordTypeOptions=Object.values(data.recordTypeInfos).filter(rec=>rec.name!='Master').map(d=>{
                return {label:d.name, value:d.recordTypeId}
            }) ;
            console.log(this.recordTypeOptions);
            //this.recordTypeOptions=
        }
    }
    handleChangeRecordType(event){
        
        this.recordTypeValue=event.target.value;
        console.log('inside handler',this.value)
            this.recordTypeOptions.forEach(element => {
                console.log('inside loop', element.label)
                if(this.recordTypeValue===element.value){
                    this.recordTypeId=element.value;
                    
                    console.log(this.recordTypeId)
                } //else if(this.recordTypeValue===element.value){
                    
                //     this.recordTypeId=element.value;
                //     console.log('Inside Organization',this.recordTypeId)
                // }
            });
            
        
    }
    
    @wire(getPicklistValues, {recordTypeId:'$recordTypeId', fieldApiName:'Account.Industry'})
    getPicklistValues({data, error}){
        console.log(this.recordTypeId)
        if(data){
            console.log(data.values)
            this.recordTypePicklistValues=data.values.map(d=>{
                return {label:d.label, value:d.value}
            })
        }
    }

    
    
    handleChangePicklistValues(event){
        this.picklistValue=event.target.value;
    }
    
}