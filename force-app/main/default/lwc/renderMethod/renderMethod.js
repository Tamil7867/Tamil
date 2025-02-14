import { LightningElement } from 'lwc';
import standardCalculator from './standardCalc.html';
import scientificCalculator from './scientificCalc.html';
import renderTemplate from './renderMethod.html';

export default class RenderMethod extends LightningElement {
    chosenTemplate;
    numArray=[];
    num;
    number;
    number2;
    operator;
    disp1;
    result;

    render(){
        return this.chosenTemplate==='Standard Calculator'? standardCalculator:
                this.chosenTemplate==='Scientific Calculator'? scientificCalculator: renderTemplate;
    }
    handleClick(event){
        this.chosenTemplate=event.target.label;
    }
    handleNumClick(event)
    {
        // this.disp2=true;
        this.num=event.target.label;
        this.numArray=[...this.numArray,this.num];
        this.number = parseInt(this.numArray.join(''));
        this.disp1=this.number;
    }
    handleOperator(event)
    {
        //this.disp1=0;
        this.disp1=null;
        this.number2=this.number;
        this.operator=event.target.label;
        this.numArray.length=0;
        //this.number=0;
        //console.log(this.number);
        //console.log('operator');
        // this.disp1=false;
        // this.disp2=true;
    }
    handleEqual(event)
    { 
        switch (this.operator) {
            case '+':
                this.result= this.number2 + this.number;
                break;
            case '-':
                this.result= this.number2 - this.number;
                break;
            case '*':
                this.result= this.number2 * this.number;
                break;
            case '/':
                this.result= this.number2 / this.number;
                break; 
            case '^2':
                this.result= this.number2 * this.number2;
                break;
            case '%':
                this.result= this.number2 / 100;
                break;
            case 'CBRT':
                this.result= Math.cbrt(this.number2) ;
                break;
            case 'SQRT':
                this.result= Math.sqrt(this.number2);
                break;
            case 'cos':                     
                this.result=Math.cos(this.number2* Math.PI / 180).toFixed(2);
                break;
            case 'sin':                     
                this.result=Math.sin(this.number2* Math.PI / 180).toFixed(2);
                break;
            case 'tan':                     
                this.result=Math.tan(this.number2* Math.PI / 180).toFixed(2);
                break;
        
    }
        this.disp1=this.result;
        console.log(this.number2);
        console.log(this.operator);
        console.log(this.number);
        console.log(this.result);
    }
    handleC(event)
    {
        this.numArray.length=0;
        this.number2=0;
        this.number=0;
        this.result=0;
        this.disp1=null;
        console.log(this.number2);
        console.log(this.operator);
        console.log(this.number);
        console.log(this.result);
    }
    handleBack(event)
    {
        this.numArray.splice(-1, 1);;
        this.number = parseInt(this.numArray.join(''));
        this.disp1=this.number;
    }
}