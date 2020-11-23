// @flow
import React from 'react';
import './discovery-row.css';
import DiscoveryHabit from "../DiscoveryHabit";
import type { Habit } from "../../types/Habit";

type Props = {
    discoveryHabits: Habit[]
}

const DiscoveryRow = ({ discoveryHabits }: Props) => {
    return (
        <>
            <div className={'discovery-row__margin'} />
            <div className={'discovery-row__container'}>
                <div className={'discovery-row__label'}>
                    Discover Habits:
                </div>
                <div className={'discovery-row__habit-container'}>
                    {discoveryHabits.map((habit, index) => (
                        <DiscoveryHabit key={index} habit={habit} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default DiscoveryRow;
