import { LightningElement, api } from 'lwc';

export default class QuizResultGrandChild extends LightningElement {
    @api playerName;
    @api totalScore;
    @api totalTiming;

    handleClickClose(event){
        
        this.dispatchEvent(new CustomEvent('close'));
    }
    handleClickPlayAgain(event){
        this.dispatchEvent(new CustomEvent('playagain'));
    }
 }