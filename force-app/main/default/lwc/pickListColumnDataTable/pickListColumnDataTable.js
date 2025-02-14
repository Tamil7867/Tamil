import { api, LightningElement, wire } from 'lwc';
import getAccountsList from '@salesforce/apex/AccountController.getAccountsList';
import { getPicklistValues } from "lightning/uiObjectInfoApi";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Rating";
export default class PickListColumnDataTable extends LightningElement {
    loading;
    // data=[
    //     {'Id': 123, 'Name':'Abc', 'Industry':'Education', 'Revenue':60000, 'Rating': 'Hot'},
    //     {'Id': 124, 'Name':'Bcs', 'Industry':'Banking', 'Revenue':70000, 'Rating': 'Warm'},
    //     {'Id': 125, 'Name':'Def', 'Industry':'Construction', 'Revenue':80000, 'Rating': 'Hot'}
    // ];
    data;
    draftValues;
     options=[
        {label:'Hot', value:'Hot'},
        {label:'Warm', value:'Warm'},
        {label:'Cold', value:'Cold'}
    ];
    columns=[
        {label: 'Id', fieldName: 'Id'},
        {label: 'Name', fieldName: 'Name'},
        {label: 'Industry', fieldName: 'Industry'},
        {label: 'Rating', fieldName: 'Rating', type: 'picklist', editable:true,
            typeAttributes: {
                label: 'Rating',
                value: { fieldName: 'Rating' },
                //fieldName: 'Rating',
                placeholder: 'Select Rating',
                options: this.options,
                context: { fieldName: 'Id' },
                // contextName: 'Id'
            }}
    ]
    connectedCallback() {
        this.draftValues = [];
    }

    @wire(getAccountsList)
    getAccountData({data, error}) {
        this.loading = true;
        if (data) {
            console.log('Account data',data)
            // let tempData = JSON.parse(JSON.stringify(data));
            // console.log('inside wired data'+tempData)
            // for (let i = 0; i < tempData.length; i++) {
            //     tempData[i].AccountName = tempData[i].Account.Name;
            // }
            this.data = data;
            this.loading = false;
            console.log('after the loop',this.data)
        }
        else if (error) {
            console.log(JSON.parse(JSON.stringify(error)));
        }
    }

    // @wire(getPicklistValues, { recordTypeId: "0122w000000Va3jAAC", fieldApiName: INDUSTRY_FIELD })
    // getPicklistOptions({data,error}){
    //     if(data){
    //         console.log('inside picklist values', data)
    //         this.options=JSON.stringify(Object.values(data.values).map(d=>{
    //             return {label:d.label, value:d.value}
    //         }))
    //         console.log('rating options', this.options)
    //     }
    // }

    handleCellChange(event) {
        this.loading = true;
        let draftValue = event.detail.draftValues[0];
        console.log(draftValue);

        let tempValues = JSON.parse(JSON.stringify(this.draftValues));

        if (tempValues.length > 0) {
            for (let i = 0; i < tempValues.length; i++) {
                if (tempValues[i].Id == draftValue.Id) {
                    tempValues[i] = Object.assign(tempValues[i], draftValue);
                }
            }
        }
        else {
            tempValues.push(draftValue);
        }
        this.draftValues = tempValues;
        this.loading = false;
    }
}