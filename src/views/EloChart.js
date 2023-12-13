import Chart from "./Chart";
import React from "react";
import DataAccessorWrapper from "../wrappers/DataAccessorWrapper";

export default function EloChart(props){

    const lineData = {
        labels: DataAccessorWrapper.OpponentNameArray(props.data, props.algoId),
        datasets: [
            {
                fill: false,
                lineTension: 0.5,
                backgroundColor: props.darkMode ? 'black' : 'rgba(75,192,192,1)',
                borderColor: props.darkMode ? 'rgba(175,175,175,1)' : 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: DataAccessorWrapper.EloOverTime(props.data, props.algoId)
            }
        ]
    }

    return(<Chart data={lineData} creator={DataAccessorWrapper.CreatorsName(props.data, props.algoId)} algoName={DataAccessorWrapper.AlgoName(props.data, props.algoId)}/>)
}