import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class QuizApp extends LightningElement {
    name;
    email;
    playerScore;
    timer="00:00";
    startQuiz=false;
    endQuiz=false;
    timeTaken;
    handleNameChange(event){
        this.name=event.target.value;
    }
    handleEmailChange(event){
        this.email=event.target.value;
    }
    handleStartQuizClick(event){
        const myToast = new ShowToastEvent(
                {
                    title:'Quiz Started',
                    message: 'You have 3 Quiz to Answer',
                    variant: 'success'
                }
            )
            this.dispatchEvent(myToast);
            this.startQuiz=true;
           
            this.start();
            
        }
    
    intervalId;
    a=0;
    b=0;
    c=0;
    d=0;
      
     start()
    {
       this.intervalId=setInterval(() => {
           this.d++;
           if(this.d>9)
           {
               this.c++;
               this.d=0;
           }
           else if(this.c>5)
           {
               this.b++;
               this.c=0;
           }
           else if(this.b>9)
           {
               this.a++;
               this.b=0;
           }
           this.timer=(`${this.a}${this.b}:${this.c}${this.d}`);
       },1000);
    }
    handleFinish(event){
        this.startQuiz=false;
        this.playerScore=event.detail;
       console.log(this.playerScore);
        this.endQuiz=true;
        this.timeTaken=this.timer;
    }
    handleClose(event){
        this.endQuiz=false;
        clearInterval(this.intervalId);
        this.name=null;
        this.email=null;
    }
    
    handlePlayagain(event){
        this.endQuiz=false;
        clearInterval(this.intervalId);
        this.startQuiz=true;
        this.start();
        

    }
}