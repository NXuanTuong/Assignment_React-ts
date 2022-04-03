import React from 'react'
import { Navigate } from 'react-router-dom'

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps, {}) => {
  
  return (
    props.children
  )
}

export default PrivateRouter