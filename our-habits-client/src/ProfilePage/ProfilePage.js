// @flow
import React, { useState, useEffect } from 'react';
import getUser from '../api/getUser';
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

type Props = {
    username: string
}

const ProfilePage = ({ username }: Props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser(username).then(user => setUser(user));
    }, [username]);

    return (
        <>
            {!user ?
                (<CircularProgress />) :
                (<Container>
                    <Paper>
                        {user.username}'s Profile{' '}
                        {user.bio}
                    </Paper>
                </Container>)
            }
        </>
    );
};

export default ProfilePage;
