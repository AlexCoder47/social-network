import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "62f73226-678d-4da6-a010-9a7372f57ddd" }
})

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => { return response.data })
    },
    updateFriends (id) {
        return instance.get(`follow/` + id, {
            withCredentials: true,
            headers: { "API-KEY": "62f73226-678d-4da6-a010-9a7372f57ddd" }
        }).then(response => { return response.data })
    }
}