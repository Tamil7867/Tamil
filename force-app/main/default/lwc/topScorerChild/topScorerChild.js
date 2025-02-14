import { LightningElement, api } from 'lwc';

export default class TopScorerChild extends LightningElement {
    @api playerArrayObj=[];

    @api topPlayerScore=[];

    get isPlayersObjEmpty(){
        return this.playerArrayObj.length>0;
    }

    get isTopPlayerScore(){
        return this.topPlayerScore.length>0;
    }

    topScore(array, attribute){
        let max=0;
        array.forEach(element => {
            if(element[attribute]>max){
                max=element[attribute];
            }
            return max;
        });
        
        console.log(max);
    }
    
}