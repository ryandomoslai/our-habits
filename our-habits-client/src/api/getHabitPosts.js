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

const getHabitPostsForHabit = (habitName: string): Promise<Array<HabitPost>> => {
    return axios.get(`/api/habit-posts/habit/${habitName}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error.message));
}

const createHabitPost = (username: string, content: string, habitName: string): Promise<HabitPost> => {
    return axios.post(`/api/habit-posts/create/${username}`, { content, habitName })
        .then(response => response.data)
        .catch(error => Promise.reject(error.message));
}

export { getHabitPostsByUser, getHabitPostsForUser, getHabitPostsForHabit, createHabitPost }
