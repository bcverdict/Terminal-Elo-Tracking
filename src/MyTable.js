import React, {useContext} from 'react'
import './MyTable.css'
import {ThemeContext} from "./ThemeContext";
export default function MyTable(props) {
    const {darkMode} = useContext(ThemeContext);
    const rival = props.rival
    const gameData = props.data
    const toCenterStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        color: darkMode ? "#c9d1d9" : "black",
        backgroundColor: darkMode ? "#0d1117" : "white",
    }
    //console.log("gameData: "+JSON.stringify(gameData))
    //console.log("rival: "+rival)
    return (
        <div style={toCenterStyle}>
            <h1>Rival: {rival}</h1>
            <h2>Games Played: {gameData[rival]["Results"].length} </h2>
            <table className="toCenter">
                <thead className="full">
                    <tr className="full">
                        <td className="data"><h4>Algo name</h4></td>
                        <td className="data"><h4>Results</h4></td>
                        <td className="data"><h4>Turns</h4></td>
                        <td className="data"><h4>Elo</h4></td>
                        <td className="data"><h4>Game</h4></td>
                    </tr>
                </thead>
                <tbody className="toCenter">
                    {gameData[rival]["Results"].map((result, index)=> {
                        return(
                            <tr className="full">
                                <td className="data"><button type="button" className="link-button" onClick={() => props.changeId(gameData[rival]["AlgoId"][index])}><h5>{gameData[rival]["AlgoName"][index]}</h5></button></td>
                                <td className="data"><h5>{gameData[rival]["Results"][index]}</h5></td>
                                <td className="data"><h5>{gameData[rival]["Turns"][index]}</h5></td>
                                <td className="data"><h5>{gameData[rival]["Elo"][index]}</h5></td>
                                <td className="data"><a href={gameData[rival]["Game"][index]} target="blank"><h5>watch</h5></a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <h1>All Games</h1>
            <div className="WAndL">
                <h2>Wins: {props.wins}</h2>
                <h2>Losses: {props.losses}</h2>
            </div>
            <table className="toCenter">
                <thead className="full">
                    <tr className="full">
                        <td className="data"><h4>Algo name</h4></td>
                        <td className="data"><h4>Results</h4></td>
                        <td className="data"><h4>Turns</h4></td>
                        <td className="data"><h4>Elo</h4></td>
                        <td className="data"><h4>Game</h4></td>
                    </tr>
                </thead>
                <tbody className="toCenter">
                {
                    Object.keys(gameData).map((key) => {
                        return(
                        gameData[key]["Results"].map((result, index)=> {
                            return(
                                <tr className="full">
                                    <td className="data"><button type="button" className="link-button" onClick={() => props.changeId(gameData[key]["AlgoId"][index])}><h5>{gameData[key]["AlgoName"][index]}</h5></button></td>
                                    <td className="data"><h5>{gameData[key]["Results"][index]}</h5></td>
                                    <td className="data"><h5>{gameData[key]["Turns"][index]}</h5></td>
                                    <td className="data"><h5>{gameData[key]["Elo"][index]}</h5></td>
                                    <td className="data"><a href={gameData[key]["Game"][index]}><h5>watch</h5></a></td>
                                </tr>
                            )
                        })
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
