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
    updateFriends(id, action) {
        if (action==="add") {
            return instance.post(`follow/` + id).then(response => { return response.data })
        } else if (action==="delete") {
            return instance.delete(`follow/` + id).then(response => { return response.data })
        }
        
    }
}