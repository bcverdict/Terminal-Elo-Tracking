import React, {useEffect} from "react";
import tableController from "../controllers/TableController";
import TablePagination from "@mui/material/TablePagination";

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
        return props.tableModelPageNum < props.tableModel.GetPageNumLimit(props.rowsPerPage)
    }

    const fullTableHasMultiplePages = () => {
        return props.tableModel.GetPageNumLimit(props.rowsPerPage) > 0
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
                count={props.tableModel.GetData().length}
                page={props.tableModelPageNum}
                onPageChange={handleChangePage}
                rowsPerPage={props.rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
    )
}