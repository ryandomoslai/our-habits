import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './my-habit.css';
import type {Habit} from "../../types/Habit";
import type {HabitScore} from "../../types/HabitScore";
import IconHandler from "../../IconHandler";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

type Props = {
    habit: Habit,
    habitScore: HabitScore,
    setSelectedHabitName: string => void
}

const MyHabit = ({ habit, habitScore, setSelectedHabitName }: Props) => {
    const history = useHistory();
    const [checkCircleColor, setCheckCircleColor] = useState('action')

    const handleHabitClick = () => {
        setSelectedHabitName(habit.name);
        history.push('/');
    }

    const handleCheckCircleClick = () => {
        if (checkCircleColor === 'action') {
            setCheckCircleColor('primary');
        }
    }

    return (
        <div className={'my-habit__container'}>
            <div className={'my-habit__info-container'}>
                <div className={'my-habit__habit-container'}>
                    <div className={'my-habit__habit-text'}>
                        {habit.name}
                    </div>
                    <div onClick={handleHabitClick} className={'my-habit__habit-icon'}>
                        <IconHandler iconName={habit.icon} />
                    </div>
                </div>
                <div>
                    <div className={'my-habit__streak-text'}>Current Streak: {habitScore.currentStreak} days</div>
                    <div className={'my-habit__streak-text'}>Best Streak: {habitScore.bestStreak} days</div>
                    <div className={'my-habit__streak-text'}>Total Days: {habitScore.totalScore} days</div>
                </div>
            </div>
            <div className={'my-habit__complete-button'}>
                <CheckCircleIcon fontSize={'large'} onClick={handleCheckCircleClick} color={checkCircleColor} />
            </div>
        </div>
    )
}

export default MyHabit;
