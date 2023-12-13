import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import DataAccessorWrapper from "../wrappers/DataAccessorWrapper";

export default function TableDisplayData(props) {

    const {darkMode} = useContext(ThemeContext);

    const rowItemStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        color: darkMode ? "#c9d1d9" : "black",
        backgroundColor: darkMode ? "#0d1117" : "white",
        height: "60px",
    }

    const labels = () => (
        <tr className="full">
            <td style={rowItemStyle}><h4>Algo name</h4></td>
            <td style={rowItemStyle}><h4>Results</h4></td>
            <td style={rowItemStyle}><h4>Turns</h4></td>
            <td style={rowItemStyle}><h4>Elo</h4></td>
            <td style={rowItemStyle}><h4>Game</h4></td>
        </tr>
    );

    const setIdAndRefreshData = (id, changeId) => {
        changeId(id)
    }

    const row = (matchData, index, changeId, algoId) => {
        return (
            <tr className="full" key={index}>
                <td style={rowItemStyle}>
                    <button type="button" className="link-button" onClick={() => setIdAndRefreshData(DataAccessorWrapper.OpponentAlgoIdFromMatch(matchData, algoId), changeId)}>
                        <h5>{DataAccessorWrapper.OpponentAlgoNameFromMatch(matchData, algoId)}</h5>
                    </button>
                </td>
                <td style={rowItemStyle}><h5>{DataAccessorWrapper.MatchResult(matchData, algoId)}</h5></td>
                <td style={rowItemStyle}><h5>{DataAccessorWrapper.MatchTurns(matchData)}</h5></td>
                <td style={rowItemStyle}><h5>{DataAccessorWrapper.OpponentAlgoRatingFromMatch(matchData, algoId)}</h5></td>
                <td style={rowItemStyle}><a href={DataAccessorWrapper.GameLinkFromMatchData(matchData)} target="_blank"><h5>watch</h5></a></td>
            </tr>
        );
    };

    return (
        <table className="toCenter">
            <thead className="full">
            {labels()}
            </thead>
            <tbody className="toCenter">
            {
                props.data.map((element, index) => {
                    return row(element, index, props.changeId, props.algoId)
                })
            }
            </tbody>
        </table>
    );
}