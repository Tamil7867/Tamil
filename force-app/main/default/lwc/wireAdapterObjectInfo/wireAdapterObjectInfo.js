import { LightningElement, wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';
export default class WireAdapterObjectInfo extends LightningElement {
    objectInfo;
    noOfFields;
    noOfCustomfields=0;
    noOfPicklistFields;
    noOfRecordTypes;
    fieldApiNames;
    fields;
    @wire(getObjectInfo,{objectApiName:'Account'})
    objectInfoHandler({data, error}){
        if(data){
           console.log(data);
            this.objectInfo=data;
            this.noOfFields=Object.keys(data.fields).length;
            this.noOfRecordTypes=Object.keys(data.recordTypeInfos).length;
            this.fields=Object.keys(data.fields).forEach(rec=> {
                
                if(rec.endsWith("__c")){
                    
                    this.noOfCustomfields++;
                }
            });
           this.noOfPicklistFields=Object.values(data.fields).filter((field)=>field.dataType==="Picklist").length;
       
        this.fieldApiNames=Object.values(data.fields).map(field=>{
            return [field.apiName]
        })
       
        }
    }
    
}