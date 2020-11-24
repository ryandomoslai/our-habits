// @flow
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getHabitScoresForUser, createHabitScore } from "../../api/getHabitScores";
import Paper from '@material-ui/core/Paper';
import type { HabitPost as HabitPostType } from "../../types/HabitPost";
import './feed-posts-card.css';
import HabitPost from '../HabitPost';
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

type Props = {
    username: String,
    feedHabitPosts: HabitPostType[],
    setSelectedHabitName: string => void,
    selectedHabitName: string
}

const FeedPostsCard = ({ username, feedHabitPosts, setSelectedHabitName, selectedHabitName }: Props) => {
    const history = useHistory();
    const title = selectedHabitName ? `${selectedHabitName} Feed:`: `${username}'s Feed:`;
    const [startButtonLoading, setStartButtonLoading] = useState(false);
    const [habitStartDate, setHabitStartDate] = useState(null);
    const buttonDisabled = !!habitStartDate;

    useEffect(() => {
        if (selectedHabitName) {
            setStartButtonLoading(true);
            getHabitScoresForUser(username).then(scores => {
                const currentHabitScore = scores.find(score => score.habitName === selectedHabitName);
                if (currentHabitScore) {
                    setHabitStartDate(new Date(currentHabitScore.startDate).toLocaleString().split(',')[0]);
                }
                setStartButtonLoading(false);
            });
        }
    }, [username, feedHabitPosts, setSelectedHabitName, selectedHabitName]);

    const handleStartHabit = () => {
        createHabitScore(username, selectedHabitName).then(() => {
            history.push('/habits');
        })
    }

    return (
        <>
            <div className={'feed-posts-card__label'}>
                <div>{title}</div>
                {selectedHabitName ?
                    startButtonLoading ?
                            (<CircularProgress />) :
                            (<div className={'feed-posts-card__start-button'}>
                                <Button disabled={buttonDisabled} onClick={handleStartHabit}>
                                    {!!habitStartDate ? `Started ${habitStartDate}`: `Start habit`}
                                </Button>
                            </div>)
                    : (<div />)
                }
            </div>
            <Paper className={'feed-posts-card'}>
                <div className={'feed-posts-card__margin'} />
                {feedHabitPosts.map((feedHabitPost, index) => (
                    <HabitPost selectedHabitName={selectedHabitName} setSelectedHabitName={setSelectedHabitName} habitPost={feedHabitPost} key={index} />
                ))}
            </Paper>
        </>
    )
}

export default FeedPostsCard;
