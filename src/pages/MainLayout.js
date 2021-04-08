
import React from 'react'
import Modal from '../components/ItemModal';
import ResultTable from '../components/ResultTable';
import SearchBar from '../components/SearchBar';

import './styles.css';

const MainLayout = () => {
    
    return (
        <div className="container">
            <div className="main">
                <h1>Star Wars Search Challenge</h1>
                <h2>Type on search box bellow to find out something interesting about STAR WARS</h2>
                <p>Click on the table row to check detailed information about each item. After 3 characteres the search will be made automatically</p>
                <SearchBar></SearchBar>
                <ResultTable />
                <Modal/>
            </div>
        </div>
    )
}

export { MainLayout }
