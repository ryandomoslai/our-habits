// @flow
import React from 'react';
import './search-row.css';
import Button from "@material-ui/core/Button";

const SearchRow = () => {
    return (
        <>
            <div className={'search-row__margin'} />
            <div className={'search-row__container'}>
                <div className={'search-row__label'}>
                    My Habits:
                </div>
                <div className={'search-row__search-bar'}>
                    <Button size={'small'} variant={'contained'} color={'primary'}>
                        Search and create
                    </Button>
                </div>
            </div>
        </>
    )
}

export default SearchRow;
