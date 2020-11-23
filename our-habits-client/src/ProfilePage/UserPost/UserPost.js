import React from 'react';
import './user-post.css';
import Button from "@material-ui/core/Button";

const UserPost = () => {
    const userHabitPost = {
        habitName: 'Running',
        content: 'Today was my fifth day running. Getting easier! I think I will need to invest in new shoes, any recommendations?',
        likes: 14
    };

    return (
        <div className={'user-post__container'}>
            <div className={'user-post__habit'}>
                <div>
                    {userHabitPost.habitName}
                </div>
                <div className={'user-post__feed-button'}>
                    <Button size={'small'} variant={'contained'} color={'primary'} fullWidth>Go to feed</Button>
                </div>
            </div>
            <div className={'user-post__content'}>
                <div className={'user-post__like-text'}>
                    {userHabitPost.likes} {userHabitPost.likes === 1 ? 'like' : 'likes'}
                </div>
                <div>
                    {userHabitPost.content}
                </div>
            </div>
        </div>
    )
}

export default UserPost;
