import React, {useEffect, useState} from 'react'
import '../styles/MyTable.css'

import TableDisplayData from "./TableDisplayData";
import Pagination from "./Pagination";
import tableController from "../controllers/TableController";
import TableController from "../controllers/TableController";

export default function MyTable(props) {

    const [displayData, setDisplayData] = useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [pageNum, setPageNum] = useState(0)

    useEffect(() => {
        setDisplayData(tableController.FilterByPageNum(props.fullData, pageNum, rowsPerPage))
    }, [pageNum, rowsPerPage, props.fullData]);

    return (
        <div style={props.style}>
            <h1 className='title'>{props.title}</h1>
            <div className='stats'>
                <h3>{"Total: " + props.fullData.length}</h3>
                <h3>{"Wins: " + TableController.NumOfWins(props.fullData, props.algoId)}</h3>
                <h3>{"Losses: " + TableController.NumOfLosses(props.fullData, props.algoId)}</h3>
            </div>
            <TableDisplayData data={displayData} changeId={props.changeId} algoId={props.algoId}/>
            <Pagination
                data={props.fullData}
                tableModelPageNum={pageNum}
                setDisplayTableModel={setDisplayData}
                setTableModelPageNum={setPageNum}
                setRowsPerPage={setRowsPerPage}
                rowsPerPage={rowsPerPage}
            />
        </div>
    );
}
