import { Users } from "../Types/User"
import instance from "./instance"


export const signup = (user: Users) => {
    const url = `signup`
    return instance.post(url, user)
}

export const signin  =  (user: Users) => {
    const url = `signin`
    return instance.post(url, user)
}

export const getAll = () => {
    const url = `user`
    return instance.get(url)
}

export const readUser = (id: string) => {
    const url = `user/${id}`
    return instance.get(url)
}

export const updateUser = (user: Users) => {
    const url = `user/${user._id}`
    return instance.put(url, user)
}
