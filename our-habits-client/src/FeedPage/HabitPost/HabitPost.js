// @flow
import React from 'react';
import { useHistory } from 'react-router-dom';
import type { HabitPost as HabitPostType } from "../../types/HabitPost";
import Button from "@material-ui/core/Button";
import './habit-post.css';

type Props = {
    habitPost: HabitPostType,
    setSelectedHabitName: string => void
}

const HabitPost = ({ habitPost, setSelectedHabitName }: Props) => {
    const history = useHistory();

    const handleFeedButton = () => {
        setSelectedHabitName(habitPost.habitName);
        history.push('/');
    }

    return (
        <div className={'habit-post__container'}>
            <div className={'habit-post__top-bar'}>
                Posted by {habitPost.username}
            </div>
            <div className={'habit-post__middle-bar'}>
                <div className={'habit-post__middle-bar-left'}>
                    <div className={'habit-post__habit'}>
                        {habitPost.habitName}
                    </div>
                    <div className={'habit-post__like-text'}>
                        {habitPost.likes} {habitPost.likes === 1 ? 'like' : 'likes'}
                    </div>
                </div>
                <div className={'habit-post__feed-button'}>
                    <Button onClick={handleFeedButton} size={'small'} variant={'contained'} color={'primary'} fullWidth>
                        Go to feed
                    </Button>
                </div>
            </div>
            <div className={'habit-post__content'}>
                {habitPost.content}
            </div>
        </div>
    )
}

export default HabitPost;
