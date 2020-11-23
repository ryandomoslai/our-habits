import React from 'react';
import './top-habit.css';
import { HabitScore } from "../../types/HabitScore";
import IconHandler from "../../IconHandler";


type Props = {
    habitScore: HabitScore
}

const TopHabit = ({ habitScore }: Props) => {
    return (
        <div className={'top-habit'}>
            <div className={'top-habit__text-container'}>
                <div className={'top-habit__name'}>
                    {habitScore.habitName}
                </div>
                <div className={'top-habit__score'}>
                    {habitScore.bestStreak} days
                </div>
            </div>
            <div className={'top-habit__icon'}>
                <IconHandler iconName={habitScore.icon} />
            </div>
        </div>
    )
}

export default TopHabit;
