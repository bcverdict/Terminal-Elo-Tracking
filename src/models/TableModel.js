export default class TableModel{
    constructor(data = [], creatorsName, creatorsAlgoName) {
        this.data = data;
        this.creatorsName = creatorsName
        this.creatorsAlgoName = creatorsAlgoName
    }

    GetData(){
        return this.data
    }

    HasData(){
        return this.data.length !== 0;
    }

    HasNoData(){
        return !this.HasData();
    }

    OpponentNameArray(){
        return [""] .concat(this.data.map((element) => {
            return element.name()
        }))
    }

    EloOverTime(){
        let eloHistory = [1500]
        let eloEffectNum = 15;

        this.data.map((element, index) => {
            if(element.resultIsWin()){
                eloHistory.push(eloHistory[index] + eloEffectNum)
            } else {
                eloHistory.push(eloHistory[index] - eloEffectNum)
            }
        })

        return eloHistory
    }

    CreatorsName(){
        return this.creatorsName
    }
    CreatorsAlgoName(){
        return this.creatorsAlgoName
    }

    GetPageNumLimit(numOfRows){
        if(this.data.length <= numOfRows){
            return 0
        }

        if(this.data.length % numOfRows > 0){
            return Math.floor(this.data.length / numOfRows) + 1
        }

        return this.data.length / numOfRows
    }
}