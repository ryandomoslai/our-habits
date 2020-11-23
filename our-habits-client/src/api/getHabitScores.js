// @flow
import axios from 'axios';
import { HabitScore } from "../types/HabitScore";

const getHabitScoresForUser = (username: String): Promise<Array<HabitScore>> => {
    return axios.get(`/api/habit-scores/user/${username}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error.message));
}

export { getHabitScoresForUser };
