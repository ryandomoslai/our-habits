// @flow
import axios from 'axios';
import { HabitScore } from "../types/HabitScore";

const getHabitScoresForUser = (username: String): Promise<Array<HabitScore>> => {
    return axios.get(`/api/habit-scores/user/${username}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error.message));
}

const createHabitScore = (username: string, habitName: string): Promise<HabitScore> => {
    return axios.post(`/api/habit-scores/start/${habitName}`, {
        username
    })
        .then(response => response.data)
        .catch(error => Promise.reject(error.message));
}

export { getHabitScoresForUser, createHabitScore };
