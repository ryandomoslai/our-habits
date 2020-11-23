// @flow
import React, { useState, useEffect } from 'react';
import getUser from '../api/getUser';
import { getHabitScoresForUser } from "../api/getHabitScores";
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container';
import UserProfileCard from "./UserProfileCard";
import TopHabitsCard from "./TopHabitsCard";

type Props = {
    username: string
}

const ProfilePage = ({ username }: Props) => {
    const [user, setUser] = useState(null);
    const [habitScores, setHabitScores] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([getUser(username), getHabitScoresForUser(username)]).then(([user, habitScores]) => {
            setUser(user);
            setHabitScores(habitScores);
            setLoading(false);
        });
    }, [username]);

    return (
        <>
            {loading ?
                (<CircularProgress />) :
                (<Container>
                    <UserProfileCard user={user} />
                    <TopHabitsCard habitScores={habitScores} />
                </Container>)
            }
        </>
    );
};

export default ProfilePage;
