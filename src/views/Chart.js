import React, {useContext} from 'react'
import {Line} from 'react-chartjs-2';
import '../styles/Chart.css'
import {ThemeContext} from "./ThemeContext";
export default function Chart(props) {
    const {darkMode} = useContext(ThemeContext);
    const chartStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      width: "70%",
      color: darkMode ? "#c9d1d9" : "black",
      backgroundColor: darkMode ? "#0d1117" : "white",
    }
    return (
        <div style={chartStyle}>
            <h2>algo: {props.algoName}</h2>
            <h3>creator: {props.creator}</h3>
            <Line
            data={props.data}
            options={{
                title: { display: true, text: '' },
                hover: { mode: 'nearest', intersect: false },
                tooltips: { mode: 'nearest', intersect: false, backgroundColor: 'hsla(240,25%,76%,.81)', displayColors: false },
                legend: { display: false },
                scales: {
                  yAxes: [{ display: true, scaleLabel: { display: true, labelString: 'Elo' } }],
                  xAxes: [{ display: true, scaleLabel: { display: true, labelString: 'Opponents' }, ticks: { display: false } }]
                }
              }}
            />
        </div>
    )
}
