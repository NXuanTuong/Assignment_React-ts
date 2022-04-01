import { Users } from "../Types/User"
import instance from "./instance"


export const signup = (user: Users) => {
    const url = `signup`
    return instance.post(url, user)
}