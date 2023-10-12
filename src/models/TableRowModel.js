export default class TableRowModel
{
    constructor(opponentId, opponentName, result,turnsComplete,newElo,gameLink){
        this.opponentId = opponentId
        this.opponentName = opponentName
        this.gameResult = result
        this.turnsComplete = turnsComplete
        this.newElo = newElo
        this.gameLink = gameLink
    }

    id(){
        console.log("id called: ", this.opponentId)
        return this.opponentId
    }
    name(){
        return this.opponentName
    }
    result(){
        return this.gameResult
    }
    turns(){
        return this.turnsComplete
    }
    elo(){
        return this.newElo
    }
    link(){
        return this.gameLink
    }
    resultIsWin(){
        return this.gameResult === 'W'
    }
}