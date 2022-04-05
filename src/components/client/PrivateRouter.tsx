import React from 'react'
import { Navigate } from 'react-router-dom'

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps, {}) => {
  if (!(JSON.parse(localStorage.getItem("user") as string)) && !(JSON.parse(localStorage.getItem("user") as string))?.role) {
      return <Navigate to="/signin" />
  } else if ((JSON.parse(localStorage.getItem("user") as string))?.role == 0) {
    return <Navigate to="/" />
  }
  return props.children
}

export default PrivateRouter