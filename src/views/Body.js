import React, {useState, useContext, useEffect} from 'react';
import { Button, Input } from 'reactstrap';
import '../styles/Body.css';
import MyTable from './MyTable';
import {ThemeContext} from "./ThemeContext";
import TerminalApiWrapper from "../wrappers/TerminalApiWrapper";
import TableModel from "../models/TableModel";
import BuildTableModelController from "../controllers/BuildTableModelController";
import TableController from "../controllers/TableController";
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from "@mui/material/CircularProgress";
import RivalTableController from "../controllers/RivalTableController";
import DarkModeButton from "./DarkModeButton";
import EloChart from "./EloChart";
import Pagination from "./Pagination";
import tableController from "../controllers/TableController";


export default function Body() {
    const api_wrapper = new TerminalApiWrapper()
    const {darkMode, setDarkMode} = useContext(ThemeContext)

    const [tableModel, setTableModel] = useState(new TableModel())
    const [displayTableModel, setDisplayTableModel] = useState(new TableModel())
    const [tableModelPageNum, setTableModelPageNum] = useState(0)

    const [rivalTableModel, setRivalTableData] = useState(new TableModel())
    const [displayRivalTableModel, setDisplayRivalTableModel] = useState(new TableModel())
    const [rivalTablePageNum, setRivalTablePageNum] = useState(0)

    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        let model = await createTableModel()
        setTableModel(model)
        setIsLoading(false)
    }
    const createTableModel = async () => {
        console.log("algoId: ", algoId)
        let data = await api_wrapper.GetDataOnAlgorithm(algoId)
        console.log("data: ", data)
        return BuildTableModelController.CreateTableModel(algoId, data.data.matches)
    }

    function changeId(id){
        setAlgoId(id)
    }

    useEffect(() => {
        if(RivalTableController.hasRival(tableModel)){
            let rivalDetails = RivalTableController.findRival(tableModel)
            let rivalTableData = TableController.FilterByName(tableModel, rivalDetails[0])

            setRivalName(rivalDetails[0])
            setRivalTableData(rivalTableData)
        }

    }, [tableModel])

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.querySelector('input').value;
        setAlgoId(inputValue)
    }


    useEffect(() => {
        console.log("updating display data")
        setDisplayTableModel(tableController.FilterByPageNum(tableModel.GetData(), tableModelPageNum, rowsPerPage))
    }, [tableModelPageNum, rowsPerPage, tableModel]);
    const setTableModelPageNumCallback = (data) => {
        setTableModelPageNum(data)
    }
    const setRowsPerPageCallback = (data) => {
        setRowsPerPage(data)
    }
    const SetDisplayTableModelCallback = (data) => {
        setDisplayTableModel(data)
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
                <form className="inputButtonPair" onSubmit={handleSubmit}>
                    <Input className="input" value={inputValue === 0 ? '' : inputValue } onChange={(e)=>{setInputValue(e.target.value)}}/>
                    <Button className="button" color="primary" type="submit"><SearchIcon/></Button>
                </form>
                {tableModel.HasNoData() ? "" :
                    isLoading ? <CircularProgress />:
                <div style={toCenter}>
                    <EloChart tableModel={tableModel} darkMode={darkMode}/>
                    {!RivalTableController.hasRival(tableModel) ? "" :
                        <MyTable title={"Rival: " + rivalName} data={displayRivalTableModel} style={toCenter} changeId={changeId} totalGames={rivalTableModel.GetData().length}/>
                    }
                    <MyTable title={"All Games"} data={displayTableModel} style={toCenter} changeId={changeId} totalGames={tableModel.GetData().length}/>
                    <Pagination
                        tableModel={tableModel}
                        tableModelPageNum={tableModelPageNum}
                        setDisplayTableModel={SetDisplayTableModelCallback}
                        setTableModelPageNum={setTableModelPageNumCallback}
                        setRowsPerPage={setRowsPerPageCallback}
                        rowsPerPage={rowsPerPage}
                    />
                </div>
                }
            </div>
        </div>
    )
}
