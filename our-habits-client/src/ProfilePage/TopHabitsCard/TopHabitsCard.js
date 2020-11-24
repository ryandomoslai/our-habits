// @flow
import React from 'react';
import Paper from '@material-ui/core/Paper';
import './top-habits-card.css';
import TopHabit from "../TopHabit";

type Props = {
    habitScores: [],
    setSelectedHabitName: string => void
}

const TopHabitsCard = ({ habitScores, setSelectedHabitName }: Props) => {
    const topThreeHabitScores = habitScores.slice(0, 3);

    return (
        <Paper className={'user-profile-card'}>
            <div className={'top-habits-card__label'}>
                Top 3 Longest Streaks:
            </div>
            <div className={'top-habits-card__habit-container'}>
                <TopHabit setSelectedHabitName={setSelectedHabitName} habitScore={topThreeHabitScores[0]} />
                <TopHabit setSelectedHabitName={setSelectedHabitName} habitScore={topThreeHabitScores[1]} />
                <TopHabit setSelectedHabitName={setSelectedHabitName} habitScore={topThreeHabitScores[2]} />
            </div>
        </Paper>
    )
};

export default TopHabitsCard;
