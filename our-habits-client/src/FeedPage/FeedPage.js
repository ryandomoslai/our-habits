// @flow
import React, { useState, useEffect } from 'react';
import FeedPostsCard from "./FeedPostsCard";
import Container from '@material-ui/core/Container';
import CircularProgress from "@material-ui/core/CircularProgress";
import { getHabitPostsForUser } from "../api/getHabitPosts";

type Props = {
    username: string
};

const FeedPage = ({ username }: Props) => {
    const [feedHabitPosts, setFeedHabitPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([getHabitPostsForUser(username)]).then(([feedHabitPosts]) => {
            setFeedHabitPosts(feedHabitPosts);
            setLoading(false);
        })
    }, [username]);

    return (
        <>
            {loading ?
                (<CircularProgress />) :
                (<Container>
                    <FeedPostsCard username={username} feedHabitPosts={feedHabitPosts} />
                </Container>)
            }
        </>
    )
}

export default FeedPage;
