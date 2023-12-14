import DataAccessorWrapper from "../wrappers/DataAccessorWrapper";

export default class RivalTableController {

    static findRival(data, algoId){
        const nameFrequency = {};
        let mostFrequentName = "";
        let mostFrequentNum = 0;

        data.map((matchData) => {
            let name = DataAccessorWrapper.OpponentUserNameFromMatch(matchData, algoId);

            if (nameFrequency[name]) {
                nameFrequency[name]++;
            } else {
                nameFrequency[name] = 1;
            }

            if(nameFrequency[name] > mostFrequentNum){
                mostFrequentName = name
                mostFrequentNum = nameFrequency[name]
            }
        });

        return [mostFrequentName, mostFrequentNum];
    }

    static hasRival(data, algoId) {
        return data.length > 0 && RivalTableController.findRival(data, algoId)[1] > 1;
    }
}