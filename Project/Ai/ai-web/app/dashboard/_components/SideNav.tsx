// 'use client'

// import { History, Home, Settings, Wallet } from 'lucide-react'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import React from 'react'
// import UsagesTrack from './UsagesTrack'

// const SideNav = () => {
//   const MenuList = [
//     {
//       name: 'Home',
//       icons: Home,
//       path: '/dashboard',
//     },
//     {
//       name: 'History',
//       icons: History,
//       path: '/dashboard/history',
//     },
//     {
//       name: 'Billing',
//       icons: Wallet,
//       path: '/dashboard/billing',
//     },
//     {
//       name: 'Setting',
//       icons: Settings,
//       path: '/dashboard/setting',
//     },
//   ]

//   const path = usePathname()

//   return (
// <div className="h-screen p-5 shadow-sm border relative">
//   <div className="flex justify-center">
//     <Image src={'/logo.svg'} alt="logo" width={100} height={100} />
//   </div>
//   <hr className="my-5 border" />
//   <div className="mt-5 space-y-3">
//     {MenuList.map((menu, index) => (
//       <div
//         key={index}
//         className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
//           path === menu.path ? 'bg-primary text-white' : 'hover:bg-gray-100'
//         }`}
//       >
//         <menu.icons
//           className={`w-5 h-5 ${
//             path === menu.path ? 'text-white' : 'text-gray-600'
//           }`}
//         />
//         <h2 className={`${path === menu.path ? 'text-white' : 'text-gray-700'} font-medium`}>
//           {menu.name}
//         </h2>
//       </div>
//     ))}
//   </div>
//   {/* Credit track */}
//   <div className="absolute bottom-1 left-0 w-full">
//     <UsagesTrack />
//   </div>
// </div>


//   )
// }

// export default SideNav



'use client'

import { History, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link' // Import the Link component
import { usePathname } from 'next/navigation'
import React from 'react'
import UsagesTrack from './UsagesTrack'

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
      path: '/dashboard/settings',
    },
  ]

  const path = usePathname()

  return (
    <div className="h-screen p-5 shadow-sm border relative">
      <div className="flex justify-center">
        <Image src={'/logo.svg'} alt="logo" width={100} height={100} />
      </div>
      <hr className="my-5 border" />
      <div className="mt-5 space-y-3">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                path === menu.path ? 'bg-primary text-white' : 'hover:bg-gray-100'
              }`}
            >
              <menu.icons
                className={`w-5 h-5 ${
                  path === menu.path ? 'text-white' : 'text-gray-600'
                }`}
              />
              <h2
                className={`${
                  path === menu.path ? 'text-white' : 'text-gray-700'
                } font-medium`}
              >
                {menu.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      {/* Credit track */}
      <div className="absolute bottom-1 left-0 w-full">
        <UsagesTrack />
      </div>
    </div>
  )
}

export default SideNav
