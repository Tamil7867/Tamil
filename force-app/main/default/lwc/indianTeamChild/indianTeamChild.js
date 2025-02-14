import { LightningElement, api } from 'lwc';

export default class IndianTeamChild extends LightningElement {
    _players=[];
    @api
    get childPlayer(){
        return this._players;
    }
    set childPlayer(value){
        this._players=[...value]; //using shallow copy method and spread operator copying the proxy object into normal object 
        this._players = this._players.map(item => {
            return {
                ...item, name: item.name.toUpperCase()
            };
        });
    }

    get indPlayers() {
        return this._players.filter(item => item.team === 'india');
    }

    get ausPlayers() {
        return this._players.filter(item => item.team === 'australia');
    }

}