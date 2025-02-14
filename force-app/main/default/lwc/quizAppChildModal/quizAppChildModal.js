import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class QuizAppChildModal extends LightningElement {
    @api playerName;
    score=0;
    @api displayTimer;
    questionToDisplay=quizObjArray[0];
    i=1;
    
    
    quizObjArray=[
        {
            questionNo: 1,
            question: '1. Which Event Behaviour determines whether the event can pass through shadow boundary?',
            ans1: 'Bubbles: true',
            ans2: 'Composed: true',
            ans3: 'Capture: true'
         },
        {
            questionNo: 2,
            question: '2. Which decorator is used between parent to child communications?',
            ans1: '@api',
            ans2: '@track',
            ans3: '@wire'
        },
        {
            questionNo: 3,
            question: '3. Which element used for component styling?',
            ans1: 'HTML',
            ans2: 'JavaScript',
            ans3: 'CSS'
        }
    ]
    
    // @api firstQuestion(){
    //     this.questionToDisplay=[];
    //     this.questionToDisplay=this.quizObjArray.filter(curItem=>curItem.questionNo===this.i);
        
    // }
    
    handleClickPrevious(event){
        this.i--;
        this.questionToDisplay=[];
        this.refs.Next.disabled=false;
        this.questionToDisplay=this.quizObjArray.filter(curItem=>curItem.questionNo===this.i);
        if(this.i<=1){
            this.refs.Previous.disabled=true;
            
        }
        const uncheck= this.template.querySelectorAll(".ans");
        uncheck.forEach(element => {
            element.checked=false;
        });
    }
    handleClickNext(event){
        
        this.questionToDisplay=[];
        this.i++;
        console.log(this.i);
        this.questionToDisplay=this.quizObjArray.filter(curItem=>curItem.questionNo===this.i);
        if(this.i>=this.quizObjArray.length){
            this.refs.Next.disabled=true;
        }
        this.refs.Previous.disabled=false;
        const uncheck= this.template.querySelectorAll(".ans");
        uncheck.forEach(element => {
            element.checked=false;
        });
       
       
    }    
    handleClickFinish(event){
        
        this.dispatchEvent(new CustomEvent('finish',{detail:this.score}));

        if(this.score<=10){
            this.dispatchEvent(new ShowToastEvent({
                title: "Quiz Completed",
                message: "Good Try",
                variant: "warning"
            }));
        }else{
            this.dispatchEvent(new ShowToastEvent({
                    title:'Quiz Completed',
                    message: 'Well Done',
                    variant: 'success'
            }));
        }

        

    }
    handleChangeAns(event){

        if(event.target.checked=true){
            if(event.target.label=='Composed: true' || event.target.label=='@api' || event.target.label=='CSS'){
                this.score=this.score+10;
    
            }
        }
        
        
          
    }
}