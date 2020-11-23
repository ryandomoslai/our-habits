// @flow
import axios from 'axios';
import { Habit } from "../types/Habit";

const getHabit = (name: String): Promise<Habit> => {
    return axios.get(`/api/habit/${name}`).then(response => {
        if (response.data.length === 1) {
            return response.data[0];
        } else {
            throw new Error('More than one habit returned.');
        }
    }).catch(error => Promise.reject(error.message));
}

const getHabitsForUser = (username: String): Promise<array<Habit>> => {
    return axios.get(`/api/habit/user/${username}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error.message));
}

const getDiscoveryHabitsForUser = (username: String): Promise<array<Habit>> => {
    return axios.get(`/api/habit/user/${username}/discovery`)
        .then(response => response.data)
        .catch(error => Promise.reject(error.message));
}

export { getDiscoveryHabitsForUser, getHabitsForUser };
export default getHabit;
