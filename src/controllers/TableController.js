import DataAccessorWrapper from "../wrappers/DataAccessorWrapper";

class TableController {

    static GetStartIndex(pageNum, numOfRows){
        return pageNum*numOfRows;
    }
    static GetEndIndex(pageNum, numOfRows){
        return (pageNum+1)*numOfRows
    }

    static NumOfLosses(data, algoId){
        let totalLosses = 0;
        data.map((element) => {
            if(DataAccessorWrapper.DidLoseMatch(element, algoId)){
                totalLosses += 1;
            }
        })

        return totalLosses;
    }

    static NumOfWins(data, algoId){
        let totalWins = 0;
        data.map((element) => {
            if(DataAccessorWrapper.DidWinMatch(element, algoId)){
                totalWins += 1;
            }
        })

        return totalWins;
    }

    static FilterByOpponentUserName(data, name) {
        return data.filter((element) => {
            return DataAccessorWrapper.OpponentUserNameFromMatch(element) === name
        });
    }

    static FilterByPageNum(tableData, pageNum, numOfRows) {
        return tableData.filter((element, index) => {
            if(index >= this.GetStartIndex(pageNum, numOfRows) && index < this.GetEndIndex(pageNum, numOfRows)){
                return element
            }
        })
    }
}

export default TableController;