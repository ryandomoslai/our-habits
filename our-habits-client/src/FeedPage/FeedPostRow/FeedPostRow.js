// @flow
import React, { useState } from 'react';
import './feed-post-row.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createHabitPost, getHabitPostsForHabit } from "../../api/getHabitPosts";

type Props = {
    username: string,
    setSelectedHabitName: string => void,
    setFeedHabitPosts: string
}

const FeedPostRow = ({ username, setFeedHabitPosts, selectedHabitName }: Props) => {
    const [postInput, setPostInput] = useState('');

    const handlePost = () => {
        if (postInput !== '') {
            createHabitPost(username, postInput, selectedHabitName).then(result => {
                getHabitPostsForHabit(selectedHabitName).then(result => {
                    setFeedHabitPosts(result);
                });
            });
        }
    }

    return (
        <>
            <div className={'feed-post-row__margin'} />
            <div className={'feed-post-row__container'}>
                <div className={'feed-post-row__label'}>
                    Post to Feed:
                </div>
                <div className={'feed-post-row__input-container'}>
                    <TextField id="standard-basic" label="Post Contents" onChange={event => setPostInput(event.target.value)} />
                    <Button onClick={handlePost} size={'small'} variant={'contained'} color={'primary'}>Post</Button>
                </div>
            </div>
        </>
    )
}

export default FeedPostRow;
