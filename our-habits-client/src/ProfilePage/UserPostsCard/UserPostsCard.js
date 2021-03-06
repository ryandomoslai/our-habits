// @flow
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { HabitPost } from "../../types/HabitPost";
import './user-posts.card.css';
import UserPost from "../UserPost";

type Props = {
    username: String,
    userHabitPosts: HabitPost[],
    setSelectedHabitName: string => void
}

const UserPostsCard = ({ username, userHabitPosts, setSelectedHabitName }: Props) => {
    return (
        <Paper className={'user-posts-card'}>
            <div className={'user-posts-card__label'}>
                {username}'s Posts:
            </div>
            {userHabitPosts.map((userPost, index) => (
                <UserPost setSelectedHabitName={setSelectedHabitName} key={index} userHabitPost={userPost} />
            ))}
        </Paper>
    )
}

export default UserPostsCard;
