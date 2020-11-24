import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './top-habit.css';
import { HabitScore } from "../../types/HabitScore";
import IconHandler from "../../IconHandler";
import getHabit from "../../api/getHabit";

type Props = {
    habitScore: HabitScore,
    setSelectedHabitName: string => void
}

const TopHabit = ({ habitScore, setSelectedHabitName }: Props) => {
    const history = useHistory();
    const [habit, setHabit] = useState(null);

    const handleClick = () => {
        setSelectedHabitName(habitScore.habitName);
        history.push('/');
    }

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
            <div onClick={handleClick} className={'top-habit__icon'}>
                <IconHandler iconName={habit ? habit.icon : 'default'} />
            </div>
        </div>
    )
}

export default TopHabit;
