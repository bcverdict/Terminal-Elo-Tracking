export default class TerminalApiWrapper {

    async GetDataOnAlgorithm(id) {
        const fetched = await fetch("https://terminal.c1games.com/api/game/algo/" + id + "/matches")

        let json = await fetched.json();

        if(json.data != undefined && json.data.matches != undefined){
            return json.data.matches;
        }
        return [];
    }
}