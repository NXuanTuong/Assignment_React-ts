import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div>
        <div className="min-h-screen flex flex-col max-w-md mx-auto bg-gray-200 opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between px-1 pt-4 items-center">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" /></svg>
                </div>
                <div>
                <p className="font-semibold">My Profile</p>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}><path fill="none" d="M0 0h24v24H0z" /><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                </div>
            </div>
            <div className="flex items-center px-4 pt-12 justify-between">
                <div className="w-24 h-24 bg-blue-600 flex items-center rounded-full">
                <img className="h-30 w-30 mx-auto rounded-full" src="https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg" />
                </div>
                <div className="w-9/12 flex items-center">
                <div className="w-10/12 flex flex-col leading-none pl-4">
                    <p className="text-2xl font-bold">Soefyan</p>
                    <p className="text-sm pt-1 font-light text-gray-700">Network Engineer</p>
                </div>
                <div className="w-2/12">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700" fill="currentColor" viewBox="0 0 24 24" width={24} height={24}><path fill="none" d="M0 0h24v24H0z" /><path d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" /></svg>
                    </div>
                </div>
                </div>
            </div>
            <div className="pt-12 px-4 w-full flex flex-col">
                <p className="font-semibold text-gray-600">My Status</p>
                <div className="flex w-full pt-2 space-x-2">
                <button className="bg-gray-800 w-32 rounded-full px-4 py-2 font-ligth text-white flex">🤠 Away</button>
                <button className="bg-green-800 w-32 rounded-full px-4 py-2 font-ligth text-white flex">🎮 Game</button>
                <button className="bg-red-800 w-32 rounded-full px-4 py-2 font-ligth text-white flex">👷 Work</button>
                </div>
            </div>
            <div className="pt-12 px-4 w-full flex flex-col">
                <p className="font-semibold text-gray-600">Dashboard</p>
                <div className="flex flex-col w-full pt-2 space-y-2">
                <div className="flex w-full h-12">
                    <div className="w-2/12 h-full">
                    <div className="h-12 w-12 bg-green-600 rounded-full flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-white" fill="currentColor" viewBox="0 0 24 24" width={24} height={24}><path fill="none" d="M0 0h24v24H0z" /><path d="M2 9h19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9zm1-6h15v4H2V4a1 1 0 0 1 1-1zm12 11v2h3v-2h-3z" /></svg>
                    </div>
                    </div>
                    <div className="w-6/12 h-full flex items-start">
                    <p className="my-auto text-lg font-semibold">Payment</p>
                    </div>
                    <div className="w-4/12 h-full flex justify-end items-end">
                    <button className="flex bg-red-600 rounded-md my-auto px-5 py-1 float-right text-white font-medium">2 New</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Profile