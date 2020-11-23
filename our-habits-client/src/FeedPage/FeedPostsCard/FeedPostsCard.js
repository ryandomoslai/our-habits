// @flow
import React from 'react';
import Paper from '@material-ui/core/Paper';
import type { HabitPost as HabitPostType } from "../../types/HabitPost";
import './feed-posts-card.css';
import HabitPost from '../HabitPost';

type Props = {
    username: String,
    feedHabitPosts: HabitPostType[]
}

const FeedPostsCard = ({ username, feedHabitPosts }: Props) => {
    return (
        <>
            <div className={'feed-posts-card__label'}>
                {username}'s Feed:
            </div>
            <Paper className={'feed-posts-card'}>
                <div className={'feed-posts-card__margin'} />
                {feedHabitPosts.map((feedHabitPost, index) => (
                    <HabitPost habitPost={feedHabitPost} key={index} />
                ))}
            </Paper>
        </>
    )
}

export default FeedPostsCard;
