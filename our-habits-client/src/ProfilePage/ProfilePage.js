// @flow
import React from 'react';

type Props = {
    userName: string
}

const ProfilePage = ({ userName }: Props) => {
    return (
        <div>
            {userName}'s Profile
        </div>
    )
};

export default ProfilePage;
