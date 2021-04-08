import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
import { getSingleData } from '../dispatchers/SingleDispatcher';
import { useDispatch } from 'react-redux';

const ResultTable = () => {

    const dispatch = useDispatch();
    const searchResult = useSelector(state => state.search.data);

    const handleRowClick = (rowParams) => {
        dispatch(getSingleData(rowParams.id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'type', headerName: 'Type', width: 200 },
        { field: 'name', headerName: 'Name', width: 400 },
    ];

    const getRows = () => {
        return searchResult;
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={getRows()} columns={columns} pageSize={10} onRowClick={handleRowClick} />
        </div>
    )
}

export default ResultTable
