import { ProductType } from "../Types/Product";
import instance from "./instance";

export const list = () => {
    const url = `products`
    return instance.get(url)
}

export const create = (product: ProductType) => {
    const url = `products`
    return instance.post(url, product)
}

export const remove = (id: string) => {
    const url = `products/${id}`
    return instance.delete(url)
}

export const update = (product: ProductType) => {
    const url = `products/${product._id}`
    return instance.put(url, product)
}

export const read = (id: string) => {
    const url = `products/${id}`
    return instance.get(url)
}