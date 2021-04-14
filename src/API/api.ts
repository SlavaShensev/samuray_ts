import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'bc0f37c0-3636-40b7-850e-bf294ab46dea'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => response.data)
    },
    follow(userID: string) {
        return instance.post(`follow/${userID}`)
    },
    unFollow(userID: string) {
        return instance.delete(`follow/${userID}`)
    }
}