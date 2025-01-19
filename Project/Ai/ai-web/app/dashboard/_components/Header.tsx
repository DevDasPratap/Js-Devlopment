// import { UserButton } from '@clerk/nextjs'
// import { Search } from 'lucide-react'
// import React from 'react'

// export const Header = () => {
//   return (
//     <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
//       {/* <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
//         <Search/>
//         <input type='text' placeholder='Search' className='outline-none'/>
//       </div> */}
//       <div className='flex gap-5 item-center'>
//         <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 '>️‍🔥 Join membership just for $ 9.99/Month</h2>
//         <UserButton/>
//       </div>
//     </div>
//   )
// }



import { UserButton } from '@clerk/nextjs'
import React from 'react'

export const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex flex-col md:flex-row justify-between items-center gap-4">
      <h2 className="bg-primary p-1 rounded-full text-xs text-white px-3 text-center">
        🔥 Join membership just for $9.99/Month
      </h2>
      <div className="flex justify-center md:justify-end">
        <UserButton />
      </div>
    </div>
  )
}
