import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

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

    const row = (rowTableModel, index, changeId) => {
        return (
            <tr className="full" key={index}>
                <td style={rowItemStyle}>
                    <button type="button" className="link-button" onClick={() => setIdAndRefreshData(rowTableModel.id(), changeId)}>
                        <h5>{rowTableModel.name()}</h5>
                    </button>
                </td>
                <td style={rowItemStyle}><h5>{rowTableModel.result()}</h5></td>
                <td style={rowItemStyle}><h5>{rowTableModel.turns()}</h5></td>
                <td style={rowItemStyle}><h5>{rowTableModel.elo()}</h5></td>
                <td style={rowItemStyle}><a href={rowTableModel.link()}><h5>watch</h5></a></td>
            </tr>
        );
    };

    if(typeof props.tableData.data == "undefined"){
        return '';
    }

    console.log("data before: ", props.tableData.data)
    return (<table className="toCenter">
        <thead className="full">
        {labels()}
        </thead>
        <tbody className="toCenter">
        {
            props.tableData.data.map((rowTableModel, index) => {
                return row(rowTableModel, index, props.changeId)
            })
        }
        </tbody>
    </table>);
}