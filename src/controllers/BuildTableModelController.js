import TableModel from "../models/TableModel";
import TableRowModel from "../models/TableRowModel";

export default class BuildTableModelController
{
    static CreateTableModel(myId, arrayOfMatches){
        let creatorsName = this.retrieveCreatorsName(arrayOfMatches)
        let creatorsAlgoName = this.retrieveCreatorsAlgoName(arrayOfMatches)

        const modelData = arrayOfMatches.map((element) => {
            let result = this.result(element, myId)
            let opponentId = this.opponentAlgoId(element, result)
            let opponentName = this.opponentAlgoName(element, result)
            let turnsComplete = this.turns(element)
            let newElo = this.elo(element)
            let gameLink = this.link(element)

            return new TableRowModel(opponentId, opponentName, result, turnsComplete, newElo, gameLink)
        })

        return new TableModel(modelData, creatorsName, creatorsAlgoName)
    }

    static opponentAlgoId(data, result) {

        if(result === 'W'){
            return data.losing_algo.id;
        }

        return data.winning_algo.id;
    }
    static opponentAlgoName(data, result) {

        if(result === 'W'){
            return data.losing_algo.name;
        }

        return data.winning_algo.name;
    }

    static retrieveCreatorsAlgoName(data) {

        if(data.length === 0){
            return "";
        }

        let row = data[0]
        let result = row.result
        if(result === 'W'){
            return row.winning_algo.name;
        }

        return row.losing_algo.name;
    }

    static retrieveCreatorsName(data) {

        if(data.length === 0){
            return "";
        }

        let row = data[0]
        let result = row.result
        if(result === 'W'){
            return row.winning_user.displayName;
        }

        return row.losing_user.displayName;
    }

    static result(matchData, id){

        if(matchData.winning_algo.id == id){
            return 'W';
        }

        return 'L';
    }
    static turns(data){
        return data.turns;
    }
    static elo(data){
        return data.elo;
    }

    static link(data) {
        return "https://terminal.c1games.com/watch/"+data.id
    }

    static creatorName(){
        return this.creatorsName
    }

    static creatorAlgoName(){
        return this.creatorsAlgoName
    }
}