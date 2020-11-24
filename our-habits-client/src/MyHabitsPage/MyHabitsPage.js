// @flow
import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { getHabitScoresForUser } from "../api/getHabitScores";
import { getHabitsForUser } from "../api/getHabit";
import CircularProgress from "@material-ui/core/CircularProgress";
import MyHabitsCard from "./MyHabitsCard";

type Props = {
    username: string
};

const MyHabitsPage = ({ username }: Props) => {
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
                    <div className={'search-bar__dummy'}>

                    </div>
                    <Container>
                        <MyHabitsCard habits={habits} habitScores={habitScores} />
                    </Container>
                </>)
            }
        </>
    );
}

export default MyHabitsPage;
