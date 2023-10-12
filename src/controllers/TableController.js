import TableModel from "../models/TableModel";

class TableController {

    static GetStartIndex(pageNum, numOfRows){
        return pageNum*numOfRows;
    }
    static GetEndIndex(pageNum, numOfRows){
        return (pageNum+1)*numOfRows
    }

    static FilterByName(tableModel, name) {
        return new TableModel(tableModel.GetData().filter((element) => {
            if(element.opponentName === name){
                return element
            }
        }))
    }

    static FilterByPageNum(tableData, pageNum, numOfRows) {
        return new TableModel(tableData.filter((element, index) => {
            if(index >= this.GetStartIndex(pageNum, numOfRows) && index < this.GetEndIndex(pageNum, numOfRows)){
                return element
            }
        }))
    }
}

export default TableController;