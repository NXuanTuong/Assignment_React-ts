import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Inputs = {
    search: string,
}

type Props = {}

const Search = (props: Props) => {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()
    const navigate = useNavigate()

    const onSubmit : SubmitHandler<Inputs> = async (dataInput) => {
        console.log(dataInput);
        navigate(`/product?q=${dataInput.search}`)
    }  
    return (
    <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-300 border list-item px-5 rounded-md py-[8px] px-[7px] duration-1000 my-2">
              <button><i className="bi bi-search" /></button>
              <input {...register("search")} id="productSeach" placeholder="Men's watch..." className="border-none bg-transparent w-[250px] px-2 outline-none"/>
            </form>
    </div>
  )
}

export default Search