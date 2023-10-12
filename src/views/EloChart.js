import Chart from "./Chart";
import React from "react";

export default function EloChart(props){

    const lineData = {
        labels: props.tableModel.OpponentNameArray(),
        datasets: [
            {
                fill: false,
                lineTension: 0.5,
                backgroundColor: props.darkMode ? 'black' : 'rgba(75,192,192,1)',
                borderColor: props.darkMode ? 'rgba(175,175,175,1)' : 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: props.tableModel.EloOverTime()
            }
        ]
    }

    return(<Chart data={lineData} creator={props.tableModel.creatorsName} algoName={props.tableModel.creatorsAlgoName}/>)
}