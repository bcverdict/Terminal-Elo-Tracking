export default class RivalTableController {

    static findRival(tableModel){
        const nameFrequency = {};
        let mostFrequentName = "";
        let mostFrequentNum = 0;

        tableModel.GetData().map((element) => {
            const name = element.name();
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

    static hasRival(tableModel) {
        return RivalTableController.findRival(tableModel)[1] > 1;
    }
}