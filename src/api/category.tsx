import { CategoryType } from "../Types/Category";
import instance from "./instance";

export const listCate = () => {
    const url = `category`
    return instance.get(url)
}

export const createCate = (category: CategoryType) => {
    const url = `category`
    return instance.post(url, category)
}

export const removeCate = (id: string) => {
    const url = `category/${id}`
    return instance.delete(url)
}

export const updateCate = (category: CategoryType) => {
    const url = `category/${category._id}`
    return instance.put(url, category)
}

export const readCate = (id: any) => {
    const url = `category/${id}`
    return instance.get(url)
}
