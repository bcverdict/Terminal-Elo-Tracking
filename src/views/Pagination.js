import React from "react";
import TablePagination from "@mui/material/TablePagination";
import DataAccessorWrapper from "../wrappers/DataAccessorWrapper";

export default function Pagination(props) {
    const PreviousFullTablePage = () => {
        if(canDecrementFullPageNum()){
            props.setTableModelPageNum(props.tableModelPageNum - 1)
        }
    }
    const NextFullTablePage = () => {
        if(canIncrementFullPageNum()){
            props.setTableModelPageNum(props.tableModelPageNum + 1)
        }
    }

    const canDecrementFullPageNum = () => {
        return props.tableModelPageNum > 0
    }
    const canIncrementFullPageNum = () => {
        return props.tableModelPageNum < DataAccessorWrapper.GetPageNumLimit(props.data, props.rowsPerPage)
    }

    const fullTableHasMultiplePages = () => {
        return DataAccessorWrapper.GetPageNumLimit(props.data, props.rowsPerPage) > 0
    }

    const handleChangePage = (event, newPageNum) => {
        props.setTableModelPageNum(newPageNum);
    };

    const handleChangeRowsPerPage = (event) => {
        props.setRowsPerPage(parseInt(event.target.value, 10));
        props.setTableModelPageNum(0);
    };

    return(
        !fullTableHasMultiplePages() ? "" :
            <TablePagination
                component="div"
                count={props.data.length}
                page={props.tableModelPageNum}
                onPageChange={handleChangePage}
                rowsPerPage={props.rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
    )
}