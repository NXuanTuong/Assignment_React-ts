import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readCate } from '../../../api/category'
import { CategoryType } from '../../../Types/Category'

type CategoryEditProps = {
    onUpdateCate: (category: CategoryType) => void
}

type Inputs = {
    name: string,
}

const CategoryEdit = (props: CategoryEditProps) => {
    const { register, handleSubmit, formState:{errors}, reset} = useForm<Inputs>()
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const getProduct = async () => {
            const {data} = await readCate(id)
            console.log("data", data.category);
            const newData = data.category

            reset(newData)
        }
        getProduct()
    }, [])

    const onSubmit : SubmitHandler<Inputs> = (datainput) => {
        props.onUpdateCate(datainput)

        navigate("/admin/products")
    } 
  return (
    <div>
        <div className="bg-gray-50 h-full w-full ">
        <div id="main-content" className="p-5 mt-5 relative overflow-y-auto lg:ml-64">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Name<span className="text-red-400">*</span></label>
                    <input {...register("name", {required: true})} placeholder="Enter your name" type="text" className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
                    </div>
                </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                </button>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default CategoryEdit