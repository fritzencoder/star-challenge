import { CircularProgress, Modal } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeModal } from '../dispatchers/SingleDispatcher';

import './modal.css'

const ItemModal = () => {

    const open = useSelector(state => state.single.modalIsOpen || false);
    const data = useSelector(state => state.single.data || {});
    const parsed = useSelector(state => state.single.parsed || {});
    const loading = useSelector(state => state.single.loading);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeModal());
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className="modal">
                <div className="data">
                    Original Fetched:
                    <pre>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>

                <div className="data">
                    Complete parsed:<br />
                    {loading ? <CircularProgress /> :
                        <pre>
                            {JSON.stringify(parsed, null, 2)}
                        </pre>
                    }
                </div>
            </div>
        </Modal>
    )
}



export default ItemModal
