import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { readUser } from '../../../api/auth'

type Inputs = {
    fullname: string,
    email: string,
    role: number,
    status: number
}
 
type UserEditProps = {

}

const UserEdit = (props: UserEditProps) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<Inputs>()

    const {id} =  useParams()
    useEffect(() => {
        const getUserId = async () => {
            const {data} = await readUser(id)
            reset(data)
        }
        getUserId()
    }, [])
    const onSubmit : SubmitHandler<Inputs> = (dataInput) => {
        console.log(dataInput);
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
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Role<span className="text-red-400">*</span></label>
                        <select {...register("role")} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block p-3 w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md'>
                            <option value={0}>Thành Viên</option>
                            <option value={1}>Admin</option>
                        </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Status<span className="text-red-400">*</span></label>
                    <select {...register("status")} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block p-3 w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md'>
                            <option value={1}>Đang sử dụng</option>
                            <option value={0}>Bị Khóa</option>
                        </select>
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

export default UserEdit