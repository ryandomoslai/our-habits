// @flow
import React, { useState, useEffect } from 'react';
import FeedPostsCard from "./FeedPostsCard";
import Container from '@material-ui/core/Container';
import CircularProgress from "@material-ui/core/CircularProgress";
import { getHabitPostsForUser } from "../api/getHabitPosts";
import DiscoveryRow from "./DiscoveryRow";
import { getDiscoveryHabitsForUser } from "../api/getHabit";

type Props = {
    username: string
};

const FeedPage = ({ username }: Props) => {
    const [feedHabitPosts, setFeedHabitPosts] = useState(null);
    const [discoveryHabits, setDiscoveryHabits] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            getHabitPostsForUser(username),
            getDiscoveryHabitsForUser(username)
        ]).then(([
            feedHabitPosts,
            discoveryHabits
        ]) => {
            setFeedHabitPosts(feedHabitPosts);
            setDiscoveryHabits(discoveryHabits);
            setLoading(false);
        });
    }, [username]);

    return (
        <>
            {loading ?
                (<CircularProgress />) :
                (<>
                    <Container>
                        <FeedPostsCard username={username} feedHabitPosts={feedHabitPosts} />
                    </Container>
                    <DiscoveryRow discoveryHabits={discoveryHabits} />
                </>)
            }
        </>
    )
}

export default FeedPage;
