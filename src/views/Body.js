import React, {useState, useContext, useEffect} from 'react';
import { Button, Input } from 'reactstrap';
import '../styles/Body.css';
import MyTable from './MyTable';
import {ThemeContext} from "./ThemeContext";
import TerminalApiWrapper from "../wrappers/TerminalApiWrapper";
import TableController from "../controllers/TableController";
import CircularProgress from "@mui/material/CircularProgress";
import RivalTableController from "../controllers/RivalTableController";
import DarkModeButton from "./DarkModeButton";
import EloChart from "./EloChart";
import DataAccessorWrapper from "../wrappers/DataAccessorWrapper";
import SearchBar from "./SearchBar";


export default function Body() {
    const api_wrapper = new TerminalApiWrapper()
    const {darkMode, setDarkMode} = useContext(ThemeContext)

    const [matchData, setMatchData] = useState([])
    const [rivalData, setRivalData] = useState([])

    const [rivalName, setRivalName] = useState("")
    const [algoId, setAlgoId] = useState(0)
    const [inputValue, setInputValue] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setInputValue(algoId)
        refreshData()
    }, [algoId]);
    const refreshData = async () => {
        setIsLoading(true)
        let matchData = await createMatchData()
        setMatchData(matchData)

        let rivalData = createRivalData(matchData)
        setRivalData(rivalData)

        setIsLoading(false)
    }
    const createMatchData = async () => {
        let data = await api_wrapper.GetDataOnAlgorithm(algoId)
        return data
    }
    const createRivalData = (matchData) => {
        if(DataAccessorWrapper.DataIsValid(matchData) && RivalTableController.hasRival(matchData, algoId)){
            let rivalDetails = RivalTableController.findRival(matchData, algoId)
            let rivalTableData = TableController.FilterByOpponentUserName(matchData, rivalDetails[0])

            setRivalName(rivalDetails[0])
            return rivalTableData
        }
        return [];
    }

    function changeId(id){
        setAlgoId(id)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.querySelector('input').value;
        setAlgoId(inputValue)
    }


    const bodyStyle = {
        color: darkMode ? "#c9d1d9" : "black",
        backgroundColor: darkMode ? "#0d1117" : "white"
    }
    const toCenter = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        color: darkMode ? "#c9d1d9" : "black",
        backgroundColor: darkMode ? "#0d1117" : "white",
    }

    return (
        <div style={bodyStyle}>
            <div style={toCenter}>
                <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode}/>
                <SearchBar submitHandler={handleSubmit} setInputValue={setInputValue} inputValue={inputValue}></SearchBar>
                { DataAccessorWrapper.DataIsInvalid(matchData) ? "" :
                    isLoading ? <CircularProgress />:
                        <div style={toCenter}>
                            <div className='chartContainer'>
                                <EloChart data={matchData} darkMode={darkMode} algoId={algoId}/>
                            </div>
                            {!RivalTableController.hasRival(matchData, algoId) ? "" :
                                <MyTable
                                    title = {"Rival: " + rivalName}
                                    fullData = {rivalData}
                                    style = {toCenter}
                                    changeId = {changeId}
                                    algoId = {algoId}
                                />
                            }
                            <MyTable
                                title={"All Games"}
                                fullData = {matchData}
                                style = {toCenter}
                                changeId = {changeId}
                                algoId = {algoId}
                            />
                        </div>
                }
            </div>
        </div>
    )
}
