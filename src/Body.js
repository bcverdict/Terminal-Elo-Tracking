import React, {useState, useEffect, useContext} from 'react';
import { Button, Input } from 'reactstrap';
import './Body.css';
import Chart from './Chart';
import MyTable from './MyTable';
import {ThemeContext} from "./ThemeContext";

export default function Body() {
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    const [algoId, setId] = useState()
    const [chartData, setChartData] = useState([]) //chart data
    const [chartLabels, setChartLabels] = useState([])
    const [rival, setRival] = useState("")
    const [rivalData, setRivalData] = useState({})
    const [creatorName, setCreatorName] = useState("")
    const [playerAlgoName, setPlayerAlgoName] = useState("")
    const [previousId, setPreviousId] = useState(0)
    const [pressedFind, setPressedFind] = useState(false)
    const [fullData, setFullData] = useState({})
    const [fiveMonthData, setFiveMonthData] = useState({})
    const [oneMonthData, setOneMonthData] = useState({})
    const [wins, setWins] = useState(0)
    const [losses, setLosses] = useState(0)
    const [showError, setShowError] = useState(false)
    const lineData = {
        labels: chartLabels,
        datasets: [
          {
            fill: false,
            lineTension: 0.5,
            backgroundColor: darkMode ? 'black' : 'rgba(75,192,192,1)',
            borderColor: darkMode ? 'rgba(175,175,175,1)' : 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: chartData //ello rating
          }
        ]
      }
    const find = async () => {
        setPressedFind(true)
        setPreviousId(algoId)
        const response = await ApiCall()
    }
    const onInputChange = (id) => {
        setPressedFind(false)
        setId(id)
    }
    const ApiCall = async () => {
        //console.log("APICALL")
        //console.log("api call id: "+algoId)
        const fetched = await fetch("https://terminal.c1games.com/api/game/algo/"+algoId+"/matches")
        setShowError(fetched.status != 200)
        const response = await fetched.json().then(response => {
            console.log("response: "+JSON.stringify(response))
            const matches = response.data.matches

            /*
            var newDate = new Date()
            var month = newDate.getMonth() + 1;
            var year = newDate.getFullYear();
            console.log("Month: "+month)
            console.log("Year: "+year)
            */
            const { name, rating, createdAt } = matches[0].winning_algo.id == algoId ? matches[0].winning_algo : matches[0].losing_algo
            
            var dataArray = [1500]
            var labelArray = [""]
            
            var oneMonthDataArray =[]
            var oneMonthLabelArray = []

            var fiveMonthLabelArray = []
            var fiveMonthDataArray = []
            
            var winCount = 0
            var loseCount = 0
            var startElo = 1500
            var lineSize = 35
            var magnitudeChange = 0.9
            var matchLength = matches.length
            var slope = (rating-startElo)/matchLength
            console.log("slope: "+slope)
            var temp = startElo
            var opponent
            var result
            var elo
            var currentRival
            var rivalCount=0;
            var tableDataObj = {}
            var creator
            var Ea = 1/1.2
            var isIndividual = matches[0] && matches[0].winning_user
            if(isIndividual){
                creator = matches[0].winning_algo.id == algoId ? matches[0].winning_user.displayName : matches[0].losing_user.displayName
            }else{
                creator = matches[0].winning_algo.id == algoId ? matches[0].winning_algo.team.createdBy.displayName : matches[0].losing_algo.team.createdBy.displayName
            }
            
            var algoName
            var opponentAlgoId
            matches.forEach((match, index) => {
                const won = match.winning_algo.id == algoId
                if(won){
                    winCount += 1
                    isIndividual = ("losing_user" in match) || ("team" in match.losing_algo && JSON.stringify(match.losing_algo.team) == "null")
                    if(isIndividual){
                        opponent = "losing_user" in match ? match.losing_user.displayName : match.losing_algo.user
                    }else{
                        opponent = match.losing_algo.team.createdBy.displayName
                    }
                    result = "W"
                    elo = match.losing_algo.rating
                    algoName = match.losing_algo.name
                    opponentAlgoId = match.losing_algo.id

                    console.log("temp before: "+temp)
                    var tempRating = slope*index+startElo
                    temp = tempRating+32*(1-Ea)
                    console.log("temp after: "+temp)

                }else{
                    loseCount += 1
                    isIndividual = ("winning_algo" in match) || ("team" in match.winning_algo && JSON.stringify(match.winning_algo.team) == "null")
                    if(isIndividual){
                        opponent = "winning_user" in match ? match.winning_user.displayName : match.winning_algo.user
                    }else{
                        opponent = match.winning_algo.team.createdBy.displayName
                    }
                    result = "L"
                    elo = match.winning_algo.rating
                    algoName = match.winning_algo.name
                    opponentAlgoId = match.winning_algo.id
                    
                    console.log("temp before: "+temp)
                    var tempRating = slope*index+startElo
                    var tempRating = slope*index+startElo
                    temp = tempRating+32*(0-Ea)
                    console.log("temp after: "+temp)
                }
                /*
                console.log("m: "+slope)
                console.log("x: "+(matchLength-index))
                console.log("b: "+startElo)
                */
                console.log("original: "+(Math.round(slope*Math.abs(matchLength-index))+startElo))
                console.log("new: "+temp)
                dataArray.push(Math.round(temp))
                labelArray.push(algoName)
                if(opponent in tableDataObj){
                    tableDataObj[opponent]["AlgoId"].push(opponentAlgoId)
                    tableDataObj[opponent]["AlgoName"].push(algoName)
                    tableDataObj[opponent]["Results"].push(result)
                    tableDataObj[opponent]["Turns"].push(match.turns)
                    tableDataObj[opponent]["Elo"].push(elo)
                    tableDataObj[opponent]["Game"].push("https://terminal.c1games.com/watch/"+match.id)
                    tableDataObj[opponent]["count"]+=1
                }else{
                    tableDataObj[opponent]={}
                    tableDataObj[opponent]["AlgoId"]=[opponentAlgoId]
                    tableDataObj[opponent]["AlgoName"]=[algoName]
                    tableDataObj[opponent]["Results"]=[result]
                    tableDataObj[opponent]["Turns"]=[match.turns]
                    tableDataObj[opponent]["Elo"]=[elo]
                    tableDataObj[opponent]["Game"]=["https://terminal.c1games.com/watch/"+match.id]
                    tableDataObj[opponent]["count"]=1
                }
                if(tableDataObj[opponent]["count"] > rivalCount){
                    currentRival=opponent;
                }
            })
            setChartData(dataArray)
            setChartLabels(labelArray)
            setRival(currentRival)
            setRivalData(tableDataObj)
            setCreatorName(creator)
            setPlayerAlgoName(name)
            setWins(winCount)
            setLosses(loseCount)
        });
    }
    const changeId = (id) => {
        //console.log("CHANGEID")
        setId(id)
    }
    useEffect(()=>{
        //console.log("algoId: "+algoId)
        //console.log("previousId: "+previousId)
        //console.log("pressedFind: "+pressedFind)
        if((algoId != previousId) && pressedFind){
            //console.log("use effect triggered")
            setPreviousId(algoId)
            find()
        }
    },[algoId, setId])
    const buttonStyle = {
        color: darkMode ? "white" : "black",
        backgroundColor: darkMode ? "#545b62" : "#AFAFAF",
        borderColor: darkMode ? "#545b62" : "#AFAFAF",
    }
    const bodyStyle = {
        color: darkMode ? "#c9d1d9" : "black",
        backgroundColor: darkMode ? "#0d1117" : "white",
        height: "100%"
    }
    const toCenter = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        color: darkMode ? "#c9d1d9" : "black",
        backgroundColor: darkMode ? "#0d1117" : "white",
    }
    return (
        <div style={bodyStyle}>
            <div style={toCenter}>
                <div className="darkModeContainer">
                    <Button style={buttonStyle} onClick={()=>{setDarkMode(!darkMode)}}>{darkMode ? "Light Mode" : "Dark Mode"}</Button>
                </div>
                <Input className="input" onChange={(obj)=>onInputChange(obj.target.value)}/>
                <Button className="button" color="primary" onClick={find}>Find</Button>
                {showError && <h2>no algo with this id found</h2>}
                { Object.keys(lineData).length != 0 && creatorName != "" && playerAlgoName != "" && Object.keys(rivalData).length != 0 && rival != "" && rival in rivalData &&
                <div style={toCenter}>
                    <Chart data={lineData} creator={creatorName} algoName={playerAlgoName}/>
                    <MyTable data={rivalData} rival={rival} changeId={changeId} wins={wins} losses={losses}></MyTable>
                </div>
                }
            </div>
        </div>
    )
}
