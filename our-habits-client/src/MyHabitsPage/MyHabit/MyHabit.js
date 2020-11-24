import React from 'react';
import { useHistory } from 'react-router-dom';
import './my-habit.css';
import type {Habit} from "../../types/Habit";
import type {HabitScore} from "../../types/HabitScore";
import IconHandler from "../../IconHandler";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { updateHabitScore } from "../../api/getHabitScores";

type Props = {
    habit: Habit,
    habitScore: HabitScore,
    setSelectedHabitName: string => void
}

const MyHabit = ({ habit, habitScore, setSelectedHabitName }: Props) => {
    const history = useHistory();

    const canCompleteHabit = () => {
        return (new Date(habitScore.lastCompleted).toDateString() !== new Date().toDateString()) ||
            habitScore.currentStreak === 0;
    }

    const handleColor = () => {
        if (canCompleteHabit()) {
            return 'action';
        }
        return 'primary'
    }

    const handleHabitClick = () => {
        setSelectedHabitName(habit.name);
        history.push('/');
    }

    const handleCheckCircleClick = () => {
        if (canCompleteHabit()) {
            updateHabitScore(habitScore.username, habitScore.habitName).then(() => {
               window.location.reload();
            });
        }
    }

    const checkColor = handleColor();

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
                <CheckCircleIcon fontSize={'large'} onClick={handleCheckCircleClick} color={checkColor} />
            </div>
        </div>
    )
}

export default MyHabit;
