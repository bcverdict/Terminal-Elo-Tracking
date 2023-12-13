import DataAccessorWrapper from "../wrappers/DataAccessorWrapper";

class TableController {

    static GetStartIndex(pageNum, numOfRows){
        return pageNum*numOfRows;
    }
    static GetEndIndex(pageNum, numOfRows){
        return (pageNum+1)*numOfRows
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