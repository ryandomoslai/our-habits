// @flow
import React, { useState, useEffect } from 'react';
import FeedPostsCard from "./FeedPostsCard";
import Container from '@material-ui/core/Container';
import CircularProgress from "@material-ui/core/CircularProgress";
import { getHabitPostsForUser } from "../api/getHabitPosts";
import DiscoveryRow from "./DiscoveryRow";
import { getDiscoveryHabitsForUser } from "../api/getHabit";
import { getHabitPostsForHabit } from "../api/getHabitPosts";

type Props = {
    username: string,
    selectedHabitName: string,
    setSelectedHabitName: string => void
};

const FeedPage = ({ username, selectedHabitName, setSelectedHabitName }: Props) => {
    const [feedHabitPosts, setFeedHabitPosts] = useState(null);
    const [discoveryHabits, setDiscoveryHabits] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (selectedHabitName !== null) {
            Promise.all([
                getHabitPostsForHabit(selectedHabitName),
                getDiscoveryHabitsForUser(username)
            ]).then(([
                         feedHabitPosts,
                         discoveryHabits
                     ]) => {
                setFeedHabitPosts(feedHabitPosts);
                setDiscoveryHabits(discoveryHabits);
                setLoading(false);
            });
        } else {
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
        }
    }, [username, selectedHabitName]);

    return (
        <>
            {loading ?
                (<CircularProgress />) :
                (<>
                    <Container>
                        <FeedPostsCard setSelectedHabitName={setSelectedHabitName} username={username} feedHabitPosts={feedHabitPosts} />
                    </Container>
                    {selectedHabitName === null ? (<DiscoveryRow setSelectedHabitName={setSelectedHabitName} discoveryHabits={discoveryHabits} />) : (<div />)}
                </>)
            }
        </>
    )
}

export default FeedPage;
