import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    string="Tamil";
    string2=null;
    string3=null;
    arrayValues;
    reversearrayValues;
    reverseString;
    bgdColor;
    handleChangestring(event){
        this.string=event.target.value; 
    }

    handleChangeString2(event){
        this.string2=event.target.value;
        
         }

    handleClickchkPalindrome(event){
        
        this.reverseString=this.string2.split("").reverse().join("");
        if(this.string2 == this.reverseString){
            this.bgdColor="bgdGrnPalindrome";
            this.string3="Palindrome";
            this.string2=null;
        }else{
            this.bgdColor="bgdRednotPalindrome";
            this.string3="Not a Palindrome";
            this.string2=null;
        }
    }
}