// @flow
import React from 'react';

type Props = {
    userName: string
};

const MyHabitsPage = ({ userName }: Props) => {
    return (
        <div>
            {userName}'s Habits
        </div>
    );
}

export default MyHabitsPage;
