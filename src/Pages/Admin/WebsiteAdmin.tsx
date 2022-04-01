import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/Admin/HeaderAdmin'

type Props = {}

const WebsiteAdmin = (props: Props) => {
  return (
    <div>
        <HeaderAdmin />
        <Outlet />
    </div>
  )
}

export default WebsiteAdmin