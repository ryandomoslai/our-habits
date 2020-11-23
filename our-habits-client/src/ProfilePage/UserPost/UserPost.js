// @flow
import React from 'react';
import './user-post.css';
import Button from "@material-ui/core/Button";
import type {HabitPost} from "../../types/HabitPost";

type Props = {
    userHabitPost: HabitPost
}

const UserPost = ({ userHabitPost }: Props) => {
    return (
        <div className={'user-post__container'}>
            <div className={'user-post__top-bar'}>
                <div className={'user-post__top-bar-left'}>
                    <div className={'user-post__habit'}>
                        {userHabitPost.habitName}
                    </div>
                    <div className={'user-post__like-text'}>
                        {userHabitPost.likes} {userHabitPost.likes === 1 ? 'like' : 'likes'}
                    </div>
                </div>
                <div className={'user-post__feed-button'}>
                    <Button size={'small'} variant={'contained'} color={'primary'} fullWidth>Go to feed</Button>
                </div>
            </div>
            <div className={'user-post__content'}>
                {userHabitPost.content}
            </div>
        </div>
    );
}

export default UserPost;
