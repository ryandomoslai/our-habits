//@flow
import axios from 'axios';
import { User } from '../types/User';

const getUser = (userName: String): Promise<User> => {
    return axios.get(`/api/user/${userName}`).then(response =>  {
        if (response.data.length === 1) {
            return response.data[0];
        } else {
            throw new Error('More than one users returned.');
        }
    }).catch(error => Promise.reject(error.message));
}

export default getUser;
