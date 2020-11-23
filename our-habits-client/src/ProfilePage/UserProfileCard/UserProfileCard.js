// @flow
import React from 'react';
import type { User } from "../../types/User";
import Paper from '@material-ui/core/Paper';
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from '@material-ui/core/colors';
import './user-profile-card.css';

type Props = {
    user: User
};

const UserProfileCard = ({ user }: Props) => {
    return (
        <Paper className={'user-profile-card'}>
            <div className={'user-profile-card__container'}>
                <div className={'user-profile-card__image'}>
                    <Avatar style={{ backgroundColor: deepOrange[500] }}>
                        {user.username[0]}
                    </Avatar>
                </div>
                <div className={'user-profile-card__info'}>
                    <div className={'user-profile-card__text-container'}>
                        <div className={'user-profile-card__text-label'}>
                            Name:
                        </div>
                        <div>
                            {user.username}
                        </div>
                    </div>
                    <div className={'user-profile-card__text-container'}>
                        <div className={'user-profile-card__text-label'}>
                            Bio:
                        </div>
                        <div>
                            {user.bio}
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
};

export default UserProfileCard;
