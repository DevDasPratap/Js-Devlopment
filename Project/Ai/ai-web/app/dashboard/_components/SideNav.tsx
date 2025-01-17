'use client'

import { History, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideNav = () => {
  const MenuList = [
    {
      name: 'Home',
      icons: Home,
      path: '/dashboard',
    },
    {
      name: 'History',
      icons: History,
      path: '/dashboard/history',
    },
    {
      name: 'Billing',
      icons: Wallet,
      path: '/dashboard/billing',
    },
    {
      name: 'Setting',
      icons: Settings,
      path: '/dashboard/setting',
    },
  ]

  const path = usePathname()

  return (
    <div className='h-screen p-5 shadow-sm border'>
      <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={100} height={100} />
      </div>
      <hr className='my-5 border' />
      <div className='mt-5'>
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer ${
              path === menu.path ? 'bg-primary text-white' : ''
            }`}
          >
            <menu.icons className={`w-5 h-5 ${path === menu.path ? 'text-white' : 'text-gray-600'}`} />
            <h2 className={`${path === menu.path ? 'text-white' : 'text-gray-700'} font-medium`}>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav
