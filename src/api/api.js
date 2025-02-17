import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "62f73226-678d-4da6-a010-9a7372f57ddd" }
})

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { return response.data })
    },
    addFriends(id) {
        return instance.post(`follow/` + id).then(response => { return response.data })
    },
    removeFriends(id) {
        return instance.delete(`follow/` + id).then(response => { return response.data })
    }
}

export const ProfileAPI = {
    getProfile(id) {
        return instance.get(`profile/` + id).then(response => { return response.data })
    },
    getStatus(id) {
        return instance.get(`profile/status/` + id).then(response => { return response.data })
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status}).then(response => { return response.data })
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo/`, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => { return response.data })
    }
}

export const HeaderAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then(response => { return response.data })
    }
}

export const LoginAPI = {
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe }).then(response => { return response.data })
    },
    logout() {
        return instance.delete('auth/login').then(response => { return response.data })
    }
}