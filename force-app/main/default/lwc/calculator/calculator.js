import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    input1;
    input2;
    Answer;

    
    handleChangeNum1(event){
        this.input1=event.target.value
        
    }
    handleChangeNum2(event){
        this.input2=event.target.value
        
    }
    calAdd(){
        this.Answer=Number(this.input1)+Number(this.input2);
    }
    calSub(){
        this.Answer=Number(this.input1)-Number(this.input2);
    }
    calMul(){
        this.Answer=Number(this.input1)*Number(this.input2);
    }
    calDiv(){
        if(Number(this.input2==0)){
            this.Answer=String('Can not divide by zero');
        }else{
            this.Answer=Number(this.input1)/Number(this.input2);
        }
    }
    calClr(){
        this.input1=null;
        this.input2=null;
        this.Answer=null;
    }
    
}