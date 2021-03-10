import React, {useState, useEffect, useContext} from 'react'
import './MyTable.css'
import {ThemeContext} from "./ThemeContext";
import { Button, Input } from 'reactstrap';
export default function MyTable(props) {
    const {darkMode} = useContext(ThemeContext);
    const [tableData, setTableData] = useState([]);
    var pageNumber = 0
    const [apply, setApply] = useState(true)
    const rival = props.rival
    const gameData = props.data
    const gameArray = Object.values(gameData)
    const numOfRows = 10;
    const [showPrev, setShowPrev] = useState(pageNumber == 0 ? false : true)
    const [showNext, setShowNext] = useState(gameArray.length > (pageNumber+1)*numOfRows ? true : false)
    const [next, setNext] = useState(true)
    const [prev, setPrev] = useState(true)
    const [buttonPressed, setButtonPressed] = useState(false)
    console.log("page number: ",pageNumber)
    //console.log("from: "+pageNumber*numOfRows)
    //console.log("to: "+Math.min(pageNumber*numOfRows+numOfRows,Object.keys(gameData).length-(pageNumber*numOfRows)))
    var start = pageNumber*numOfRows
    var end = Math.min(pageNumber*numOfRows+numOfRows,pageNumber*numOfRows+Math.abs(gameArray.length-(pageNumber*numOfRows)))
    useEffect(() => {
        console.log("fullData: "+JSON.stringify(gameData))
        console.log("initial use effect")
        for(var i = start; i < end; i++){
            tableData.push(gameArray[i])
        }
    },[])
    
    //console.log("tableData: "+JSON.stringify(tableData))
    const toCenterStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        color: darkMode ? "#c9d1d9" : "black",
        backgroundColor: darkMode ? "#0d1117" : "white",
    }
    const tableRowStyle = {
        display: "flex",
        justifyContent: "center",
        width: "20%",
        color: darkMode ? "#c9d1d9" : "black",
        backgroundColor: darkMode ? "#0d1117" : "white",
    }
    const pageButtonDiv = {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        color: darkMode ? "#c9d1d9" : "black",
        backgroundColor: darkMode ? "#0d1117" : "white",
    }
    const pageButton = {
        width: "20%",
        backgroundColor: "blue",
    }
    //console.log("gameData: "+JSON.stringify(gameData))
    //console.log("rival: "+rival)
    const handleNext = () => {
        console.log("handle next")
        setButtonPressed(true)
        setNext(!next)
    }
    const handlePrevious = () => {
        setButtonPressed(true)
        setPrev(!prev)
    }
    useEffect(() => {
        console.log("in use effect next")
        if(buttonPressed){
            console.log("update next")
            console.log("previous page num: "+pageNumber)
            //console.log("table data before: "+JSON.stringify(tableData))
            setTableData([])
            var tempTableData = []
            console.log("end: ",end)
            if(gameArray.length > end){
                pageNumber += 1
                setShowPrev(true)
                console.log("next page num: "+pageNumber)
            }
            setShowPrev(pageNumber == 0 ? false : true)
            start = pageNumber*numOfRows
            end = Math.min(pageNumber*numOfRows+numOfRows,pageNumber*numOfRows+Math.abs(gameArray.length-(pageNumber*numOfRows)))

            setShowNext(gameArray.length > end)

            //console.log("start: "+start)
            //console.log("end: "+end)
            //console.log("length: "+gameArray.length)
            for(var i = start; i < end; i++)
            {
                tempTableData.push(gameArray[i])
            }
            setTableData(tempTableData)
            //console.log("table data after: "+JSON.stringify(tableData))
        }
    }, [next])
    useEffect(() => {
        if(buttonPressed){
            console.log("update previous")
            //console.log("table data before: "+JSON.stringify(tableData))
            //setTableData([])
            var tempTableData = []
            
            if(pageNumber > 0){
                setShowNext(true)
                pageNumber -= 1
            }
            setShowPrev(pageNumber == 0 ? false : true)

            start = pageNumber*numOfRows
            end = Math.min(pageNumber*numOfRows+numOfRows,pageNumber*numOfRows+Math.abs(gameArray.length-(pageNumber*numOfRows)))
            setShowNext(gameArray.length > end)
            console.log("start: "+start)
            console.log("end: "+end)
            console.log("length: "+gameArray.length)
            for(var i = start; i < end; i++)
            {
                tempTableData.push(gameArray[i])
            }
            setTableData(tempTableData)
            //console.log("table data after: "+JSON.stringify(tableData))

            //onClick={() => setPrev(!prev)}
            //onClick={() => setNext(!next)}
        }
        
    },[prev])
    return (
        <div style={toCenterStyle}>
            <h1>Rival: {rival}</h1>
            <h2>Games Played: {gameData[rival]["Results"].length} </h2>
            <table className="toCenter">
                <thead className="full">
                    <tr className="full">
                        <td style={tableRowStyle}><h4>Algo name</h4></td>
                        <td style={tableRowStyle}><h4>Results</h4></td>
                        <td style={tableRowStyle}><h4>Turns</h4></td>
                        <td style={tableRowStyle}><h4>Elo</h4></td>
                        <td style={tableRowStyle}><h4>Game</h4></td>
                    </tr>
                </thead>
                <tbody className="toCenter">
                    {gameData[rival]["Results"].map((result, index)=> {
                        return(
                            <tr className="full">
                                <td style={tableRowStyle}><button type="button" className="link-button" onClick={() => props.changeId(gameData[rival]["AlgoId"][index])}><h5>{gameData[rival]["AlgoName"][index]}</h5></button></td>
                                <td style={tableRowStyle}><h5>{gameData[rival]["Results"][index]}</h5></td>
                                <td style={tableRowStyle}><h5>{gameData[rival]["Turns"][index]}</h5></td>
                                <td style={tableRowStyle}><h5>{gameData[rival]["Elo"][index]}</h5></td>
                                <td style={tableRowStyle}><a href={gameData[rival]["Game"][index]} target="blank"><h5>watch</h5></a></td>
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
                        <td style={tableRowStyle}><h4>Algo name</h4></td>
                        <td style={tableRowStyle}><h4>Results</h4></td>
                        <td style={tableRowStyle}><h4>Turns</h4></td>
                        <td style={tableRowStyle}><h4>Elo</h4></td>
                        <td style={tableRowStyle}><h4>Game</h4></td>
                    </tr>
                </thead>
                <tbody className="toCenter">
                {
                    tableData.map((key,index) => {
                        return(
                            <tr className="full">
                                <td style={tableRowStyle}><button type="button" className="link-button" onClick={() => props.changeId(tableData[index]["AlgoId"][0])}><h5>{tableData[index]["AlgoName"][0]}</h5></button></td>
                                <td style={tableRowStyle}><h5>{tableData[index]["Results"][0]}</h5></td>
                                <td style={tableRowStyle}><h5>{tableData[index]["Turns"][0]}</h5></td>
                                <td style={tableRowStyle}><h5>{tableData[index]["Elo"][0]}</h5></td>
                                <td style={tableRowStyle}><a href={tableData[index]["Game"][0]}><h5>watch</h5></a></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <div style={pageButtonDiv}>
                {showPrev && <Button style={pageButton} onClick={() => handlePrevious()}>Prev</Button>}
                {showNext && <Button style={pageButton} onClick={() => handleNext()}>Next</Button>}
            </div>
        </div>
    )
}
