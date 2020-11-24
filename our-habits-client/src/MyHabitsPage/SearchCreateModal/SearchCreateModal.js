// @flow
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './search-create-modal.css';
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getHabitsForSearch, createHabit } from "../../api/getHabit";

type Props = {
    username: string,
    open: boolean,
    setOpen: boolean => void
}

const SearchCreateModal = ({ username, open, setOpen }: Props) => {
    const [results, setResults] = useState(null);
    const [description, setDescription] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        setLoading(true);
        getHabitsForSearch(searchInput).then(data => {
            setResults(data);
            setLoading(false);
        });
    }

    const handleCreateHabit = () => {
        if (searchInput !== '') {
            setLoading(true);
            createHabit(username, searchInput, description).then(() => {
                setOpen(false);
                window.location.reload();
            });
        }
    }

    const renderResults = () => {
        if (loading) {
            return (<CircularProgress />);
        }
        if (results !== null && results.length === 0) {
            return (
                <>
                    <div className={'search-create-modal__description'}>
                        <TextField id="standard-basic" label="Habit description" onChange={event => setDescription(event.target.value)} />
                    </div>
                    <Button onClick={handleCreateHabit}>
                        Create new habit
                    </Button>
                </>
            );
        }
        if (results !== null) {
            return (results.map((entry, index) => (
                <div className={'search-create-modal__entry'} key={index}>
                    {entry.name}
                </div>
            )));
        }
        return (<div />);
    }

    return (
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Search and Create</DialogTitle>
            <DialogContent>
                <div className={'search-create-modal__content'}>
                    <div className={'search-create-modal__input-container'}>
                        <TextField id="standard-basic" label="Habit name" onChange={event => setSearchInput(event.target.value)} />
                        <div className={'search-create-modal__button'}>
                            <Button onClick={handleSearch} size={'small'} variant={'contained'} color={'primary'}>Search</Button>
                        </div>
                    </div>
                    <div className={'search-create-modal__results'}>
                        {renderResults()}
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SearchCreateModal;
