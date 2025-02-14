//import { LightningElement, wire } from 'lwc';
import LightningDatatable from 'lightning/datatable';
import picklistTemplate from './picklistTemplate.html';
import richtextTemplate from './richtextTemplate.html';
import { loadStyle } from 'lightning/platformResourceLoader';
// import DataTableResource from '@salesforce/resourceUrl/customDataTable';
export default class CustomDataTable extends LightningDatatable {
    static customTypes = {

        picklist: {

            template: picklistTemplate,

            typeAttributes: ['options', 'label', 'value', 'placeholder']

        },

        richtext: {

            template: richtextTemplate,

            typeAttributes: ['text']

        }

    };

    // constructor() {

    //     super();

    //     Promise.all([

    //         loadStyle(this, DataTableResource),

    //     ]).then(() => {})

    // }


}