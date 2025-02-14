import { LightningElement, track } from 'lwc';

export default class TemplateLooping extends LightningElement {
    name=null;
    source=null;
    revenue=null;
    email=null;
    displayLeads=false;
    
    @track leadObjArray=[];

    handleChangeName(event){
        this.name=event.target.value;
    }

    handleChangeSource(event){
        this.source=event.target.value;
    }

    handleChangeRevenue(event){
        this.revenue=event.target.value;
    }

    handleChangeEmail(event){
        this.email=event.target.value;
    }

    handleClickAdd(event){
        if((this.name!=null && this.source!=null && this.revenue!=null && this.email!=null ))
            {
                this.leadObjArray.push(this.createLeadObj(this.name,this.source,this.revenue,this.email));
                //console.log(JSON.stringify(this.leadObjArray[0]));
            }
        else{
            alert('Enter All the Field Values');
        }
    }

    handleClickClear(event){
        this.name=null;
        this.source=null;
        this.revenue=null;
        this.email=null;
    }

    handleClickDisplay(event){
        this.displayLeads=true;
    }

    handleClickDelete(event){
        this.leadObjArray=[];
    }

    get isEmpty(){
        return this.leadObjArray.length>0;
    }

    createLeadObj(nameVal, sourceVal, revenueVal, emailVal)
    {
       return{
        name:nameVal,
        source:sourceVal,
        revenue:revenueVal,
        email:emailVal
        };
    }
}