import React from 'react'
import '../styles/MyTable.css'

import TableDisplayData from "./TableDisplayData";

export default function MyTable(props) {

    return (
        <div style={props.style}>
            <h1 className='title'>{props.title}</h1>
            <h3>{"Total: " + props.totalGames}</h3>
            <TableDisplayData tableData={props.data} changeId={props.changeId}/>
        </div>
    );
}
