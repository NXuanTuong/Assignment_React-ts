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