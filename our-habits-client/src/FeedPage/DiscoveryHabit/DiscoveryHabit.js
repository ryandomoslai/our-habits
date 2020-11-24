import React from 'react';
import { useHistory } from 'react-router-dom';
import './discovery-habit.css';
import { Habit } from "../../types/Habit";
import IconHandler from "../../IconHandler";

type Props = {
    habit: Habit,
    setSelectedHabitName: string => void
}

const DiscoveryHabit = ({ habit, setSelectedHabitName }: Props) => {
    const history = useHistory();

    const handleClick = () => {
        setSelectedHabitName(habit.name);
        history.push('/');
    }

    return (
        <div className={'discovery-habit'}>
            <div className={'discovery-habit__text'}>
                {habit.name}
            </div>
            <div onClick={handleClick} className={'discovery-habit__icon'}>
                <IconHandler iconName={habit.icon} />
            </div>
        </div>
    )
}

export default DiscoveryHabit;
