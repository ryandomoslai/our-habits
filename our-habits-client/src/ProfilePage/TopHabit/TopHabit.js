import React, { useState, useEffect } from 'react';
import './top-habit.css';
import { HabitScore } from "../../types/HabitScore";
import IconHandler from "../../IconHandler";
import getHabit from "../../api/getHabit";

type Props = {
    habitScore: HabitScore
}

const TopHabit = ({ habitScore }: Props) => {
    const [habit, setHabit] = useState(null);

    useEffect(() => {
        getHabit(habitScore.habitName).then(result => {
            setHabit(result);
        })
    }, [habitScore]);

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
                <IconHandler iconName={habit ? habit.icon : 'default'} />
            </div>
        </div>
    )
}

export default TopHabit;
