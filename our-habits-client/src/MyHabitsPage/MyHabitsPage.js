// @flow
import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { getHabitScoresForUser } from "../api/getHabitScores";
import { getHabitsForUser } from "../api/getHabit";
import CircularProgress from "@material-ui/core/CircularProgress";
import MyHabitsCard from "./MyHabitsCard";
import SearchRow from "./SearchRow";

type Props = {
    username: string,
    setSelectedHabitName: string => void
};

const MyHabitsPage = ({ username, setSelectedHabitName }: Props) => {
    const [habitScores, setHabitScores] = useState(null);
    const [habits, setHabits] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            getHabitScoresForUser(username),
            getHabitsForUser(username)
        ]).then(([
            habitScores,
            habits
        ]) => {
            setHabitScores(habitScores);
            setHabits(habits);
            setLoading(false);
        });
    }, [username]);

    return (
        <>
            {loading ?
                (<CircularProgress />) :
                (<>
                    <SearchRow setSelectedHabitName={setSelectedHabitName} username={username} />
                    <Container>
                        <MyHabitsCard setSelectedHabitName={setSelectedHabitName} habits={habits} habitScores={habitScores} />
                    </Container>
                </>)
            }
        </>
    );
}

export default MyHabitsPage;
