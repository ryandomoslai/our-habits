// @flow
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { HabitPost } from "../../types/HabitPost";
import './user-posts.card.css';
import UserPost from "../UserPost";

type Props = {
    username: String,
    userHabitPosts: HabitPost[]
}

const UserPostsCard = ({ username, userPosts = [1, 2, 3, 4, 5, 6] }: Props) => {
    return (
        <Paper className={'user-posts-card'}>
            <div className={'user-posts-card__label'}>
                {username}'s Posts:
            </div>
            {userPosts.map(userPost => (
                <UserPost key={userPost} />
            ))}
        </Paper>
    )
}

export default UserPostsCard;
