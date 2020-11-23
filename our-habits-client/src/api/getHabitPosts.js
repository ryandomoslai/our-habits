// @flow
import axios from 'axios';
import { HabitPost } from "../types/HabitPost";

const getHabitPostsByUser = (username: String): Promise<Array<HabitPost>> => {
    return axios.get(`/api/habit-posts/user/${username}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error.message));
}

const getHabitPostsForUser = (username: String): Promise<Array<HabitPost>> => {
    return axios.get(`/api/habit-posts/user/${username}/feed`)
        .then(response => response.data)
        .catch(error => Promise.reject(error.message));
}

export { getHabitPostsByUser, getHabitPostsForUser }
