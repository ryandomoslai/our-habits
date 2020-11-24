// @flow
import React, { useState } from 'react';
import './search-row.css';
import Button from "@material-ui/core/Button";
import SearchCreateModal from "../SearchCreateModal";

type Props = {
    username: string
}

const SearchRow = ({ username }: Props) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className={'search-row__margin'} />
            <div className={'search-row__container'}>
                <div className={'search-row__label'}>
                    My Habits:
                </div>
                <div className={'search-row__search-bar'}>
                    <Button onClick={() => setModalOpen(true)} size={'small'} variant={'contained'} color={'primary'}>
                        Search and create
                    </Button>
                </div>
            </div>
            <SearchCreateModal username={username} open={modalOpen} setOpen={setModalOpen} />
        </>
    )
}

export default SearchRow;
