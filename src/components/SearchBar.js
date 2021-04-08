import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchAll } from '../dispatchers/SearchDispatcher';

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch()

    const handleChange = evt => {
        const search = evt.target.value;
        setSearchValue(search);

        if (search.length > 2) {
            dispatch(searchAll(search));
         }
    }

    return (
        <div style={{ marginBottom: 20 }}>
            <TextField id="outlined-basic" label="Type to Search" variant="outlined" value={searchValue} onChange={handleChange} />
        </div>
    )
}

export default SearchBar
