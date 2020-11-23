// @flow
import React, { useState, useEffect } from 'react';
import getUser from '../api/getUser';
import { getHabitScoresForUser } from "../api/getHabitScores";
import { getHabitPostsByUser } from '../api/getHabitPosts';
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container';
import UserProfileCard from "./UserProfileCard";
import TopHabitsCard from "./TopHabitsCard";
import UserPostsCard from "./UserPostsCard";

type Props = {
    username: string
}

const ProfilePage = ({ username }: Props) => {
    const [user, setUser] = useState(null);
    const [habitScores, setHabitScores] = useState(null);
    const [habitPosts, setHabitPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            getUser(username),
            getHabitScoresForUser(username),
            getHabitPostsByUser(username)
        ]).then(([
            user,
            habitScores,
            habitPosts
        ]) => {
            setUser(user);
            setHabitScores(habitScores);
            setHabitPosts(habitPosts)
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
                    <UserPostsCard username={username} userHabitPosts={habitPosts} />
                </Container>)
            }
        </>
    );
};

export default ProfilePage;
