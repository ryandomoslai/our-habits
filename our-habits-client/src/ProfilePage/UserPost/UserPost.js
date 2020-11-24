// @flow
import React from 'react';
import { useHistory } from 'react-router-dom';
import './user-post.css';
import Button from "@material-ui/core/Button";
import type {HabitPost} from "../../types/HabitPost";

type Props = {
    userHabitPost: HabitPost,
    setSelectedHabitName: string => void
}

const UserPost = ({ userHabitPost, setSelectedHabitName }: Props) => {
    const history = useHistory();

    const handleClick = () => {
        setSelectedHabitName(userHabitPost.habitName);
        history.push('/');
    }

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
                    <Button onClick={handleClick} size={'small'} variant={'contained'} color={'primary'} fullWidth>Go to feed</Button>
                </div>
            </div>
            <div className={'user-post__content'}>
                {userHabitPost.content}
            </div>
        </div>
    );
}

export default UserPost;
