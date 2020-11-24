// @flow
import React from 'react';
import Paper from '@material-ui/core/Paper';
import type { HabitScore } from "../../types/HabitScore";
import type { Habit } from "../../types/Habit";
import MyHabit from "../MyHabit";

type Props = {
    habits: Habit[],
    habitScores: HabitScore[],
    setSelectedHabitName: string => void
}

const MyHabitsCard = ({ habits, habitScores, setSelectedHabitName }: Props) => {

    const mapHabitToScore = habits.map((habit, index) => {
        const habitScore = habitScores.find(habitScore => habitScore.habitName === habit.name);
        return (<MyHabit setSelectedHabitName={setSelectedHabitName} key={index} habit={habit} habitScore={habitScore} />);
    });

    return (
        <Paper className={'my-habits-card'}>
            <div className={'my-habits-card__margin'} />
            {mapHabitToScore}
        </Paper>
    );
}

export default MyHabitsCard;
