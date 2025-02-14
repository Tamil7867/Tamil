import { LightningElement, api } from 'lwc';

export default class CustomPicklistColumnDataTable extends LightningElement {
    @api label;

    @api placeholder;

    @api options;

    @api value;

    handleChange(event){
        this.value=event.detail.value;
    }
}