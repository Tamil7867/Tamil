import { LightningElement } from 'lwc';

export default class TimerClockParent extends LightningElement {
    handleClickStart(event){
        this.refs.timer.start();
        this.refs.stop.disabled=false;
        this.refs.reset.disabled=true;
        this.refs.start.disabled=true;
    }
    handleClickStop(event){
        this.refs.timer.stop();
        this.refs.reset.disabled=false;
        this.refs.start.disabled=false;
    }
    handleClickReset(event){
        this.refs.timer.reset();
        this.refs.stop.disabled=true;
        this.refs.reset.disabled=true;
    }
}