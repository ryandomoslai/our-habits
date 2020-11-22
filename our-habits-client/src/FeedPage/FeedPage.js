// @flow
import React from 'react';

type Props = {
    userName: string
};

const FeedPage = ({ userName }: Props) => {
    return (
        <div>
            {userName}'s Feed
        </div>
    )
}

export default FeedPage;
