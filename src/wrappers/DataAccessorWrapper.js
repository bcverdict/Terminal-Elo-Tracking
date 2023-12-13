export default class DataAccessorWrapper {

    static OpponentNameArray(data, algoId) {
        return [""] .concat(data.map((element) => {
            return this.OpponentAlgoNameFromMatch(element, algoId)
        }))
    }
    static OpponentAlgoNameFromMatch(matchData, algoId){
        if(this.DidWinMatch(matchData, algoId)){
            return matchData.losing_algo.name
        }
        return matchData.winning_algo.name
    }

    static EloOverTime(data, algoId){
        let eloHistory = [1500]
        let eloEffectNum = 15;
        data.map((matchData, index) => {
            if(this.DidWinMatch(matchData, algoId)){
                eloHistory.push(eloHistory[index] + eloEffectNum)
            } else {
                eloHistory.push(eloHistory[index] - eloEffectNum)
            }
        })
        return eloHistory
    }

    static GetPageNumLimit(data, numOfRows){
        let numOfMatches = this.NumberOfMatches(data)
        if(numOfMatches <= numOfRows){
            return 0
        }
        if(numOfMatches % numOfRows > 0){
            return Math.floor(numOfMatches / numOfRows) + 1
        }
        return numOfMatches / numOfRows
    }

    static NumberOfMatches(data){
        return data.length
    }

    static CreatorsName(data, algoId){
        let matchData = data[0]
        if(this.DidWinMatch(matchData, algoId)){
            return matchData.winning_user.displayName
        }
        return matchData.losing_user.displayName
    }

    static AlgoName(data, algoId){
        let matchData = data[0]
        if(this.DidWinMatch(matchData, algoId)){
            return matchData.winning_algo.name
        }
        return matchData.losing_algo.name
    }

    static DataIsValid(data){
        return !this.DataIsInvalid(data)
    }
    static DataIsInvalid(data){
        return !Array.isArray(data) || data.length == 0;
    }

    static DidWinMatch(matchData, algoId){
        return matchData.winning_algo.id == algoId
    }

    static DidLoseMatch(matchData, algoId){
        return matchData.losing_algo.id == algoId
    }

    static MatchResult(matchData, algoId) {
        return this.DidWinMatch(matchData, algoId) ? 'W' : 'L'
    }

    static MatchTurns(matchData){
        return matchData.turns
    }

    static OpponentAlgoIdFromMatch(matchData, algoId){
        if(this.DidWinMatch(matchData, algoId)){
            return matchData.losing_algo.id
        }
        return matchData.winning_algo.id
    }

    static OpponentAlgoRatingFromMatch(matchData, algoId){
        if(this.DidWinMatch(matchData, algoId)){
            return matchData.losing_algo.rating
        }
        return matchData.winning_algo.rating
    }

    static OpponentUserNameFromMatch(matchData, algoId){
        if(this.DidWinMatch(matchData, algoId)){
            if(matchData.losing_user == undefined){
                return matchData.losing_algo.user
            }

            return matchData.losing_user.displayName
        }

        if(matchData.winning_user == undefined){
            return matchData.winning_algo.user
        }
        return matchData.winning_user.displayName
    }

    static GameLinkFromMatchData(matchData){
        return "https://terminal.c1games.com/watch/"+matchData.id
    }
}