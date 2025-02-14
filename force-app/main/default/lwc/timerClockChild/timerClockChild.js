import { LightningElement, api } from 'lwc';

export default class TimerClockChild extends LightningElement {
    timer="00:00";
    
    intervalId;
    a=0;
    b=0;
    c=0;
    d=0;
      
    @api start()
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
       // console.log(${this.a}${this.b}:${this.c}${this.d});
    }
   @api stop()
   {
       clearInterval(this.intervalId);
   }
   @api reset()
   {
       this.a=0;
       this.b=0;
       this.c=0;
       this.d=0;
       //this.timer='00:00'; //when clicked start again, it starts from the previous value and not from 00:00
       this.timer=(`${this.a}${this.b}:${this.c}${this.d}`);
   }
   
}