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
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}