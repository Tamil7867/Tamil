import { LightningElement, track } from 'lwc';

export default class TopScorerParent extends LightningElement {
    name;
    score;
    team;
    @track topScorer=[];
    
    @track playersDetailObj=[];

    handleNameChange(event){
        this.name=event.target.value;
    }

    handleScoreChange(event){
        this.score=event.target.value;
    }

    handleTeamChange(event){
        this.team=event.target.value;
    }

    handleAddMoreClick(event){
        
        if(this.name!=null && this.score!=null && this.team!=null){
            this.playersDetailObj.push(this.createPlayerObj(this.name, this.score, this.team))
        }
        else{
            alert('Enter all field values')
        }
        this.name=null;
        this.score=null;
        this.team=null;
        this.refs.display.disabled=false;
    }

    handleClearClick(event){
        this.playersDetailObj=[];
        this.refs.display.disabled=true;
    }

    handleTopScorerClick(event){
       this.topScorer=[...this.playersDetailObj];
       if(this.topScorer.length>0){
        this.topScorer=this.topScorer.reduce((max, current)=>{
            return (current.score > max.score ? current : max);
        },this.topScorer[0])
        this.playersDetailObj=[];
        console.log(this.topScorer.length);
    }
    else{
        alert('No players list available')
        console.log(this.topScorer.length);
    }
        
    }

    createPlayerObj(nameVal, scoreVal, teamVal){
        return {
                name: nameVal,
                score: scoreVal,
                team: teamVal
        }
    }

    
}