import React from 'react';
import './discovery-habit.css';
import { Habit } from "../../types/Habit";
import IconHandler from "../../IconHandler";

type Props = {
    habit: Habit
}

const DiscoveryHabit = ({ habit }: Props) => {
    return (
        <div className={'discovery-habit'}>
            <div className={'discovery-habit__text'}>
                {habit.name}
            </div>
            <div className={'discovery-habit__icon'}>
                <IconHandler iconName={habit.icon} />
            </div>
        </div>
    )
}

export default DiscoveryHabit;
