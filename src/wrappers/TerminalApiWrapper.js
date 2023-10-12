export default class TerminalApiWrapper {

    async GetDataOnAlgorithm(id) {
        const fetched = await fetch("https://terminal.c1games.com/api/game/algo/" + id + "/matches")

        return fetched.json();
    }
}