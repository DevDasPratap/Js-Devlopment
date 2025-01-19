// import { Sidebar } from 'lucide-react';
// import React from 'react'
// import SideNav from './_components/SideNav';
// import { Header } from './_components/Header';

// const layout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
//     return (
//         <div>
//             <div>
//                 <div className='md:w-65 hidden md:block fixed'>
//                     <SideNav />
//                 </div>
//             </div>
//             <div className='md:ml-64'>
//                 <Header />
//                 {children}
//             </div>
//         </div>
//     )
// }

// export default layout

'use client'
import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import { Header } from './_components/Header';
import { TotalUsagesContext } from '../(context)/TotalUsagesContext';
import { UserSubscriptionContext } from '../(context)/UserSubscription';
import { UpdateCreditUsagesContext } from '../(context)/UpdateCreditUsageContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [totalUsages, setTotalUsages] = useState<any>(0)
  const [userSubscription, setUserSubscription] = useState<boolean>(false)
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>()
  return (
    <TotalUsagesContext.Provider value={{totalUsages, setTotalUsages}}>
    <UserSubscriptionContext.Provider value={{userSubscription, setUserSubscription}}>
      <UpdateCreditUsagesContext.Provider value={{updateCreditUsage, setUpdateCreditUsage}}>
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <div className="hidden md:block md:w-64 bg-white shadow-md">
        <SideNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-slate-100">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto bg-gray-50">{children}</main>
      </div>
    </div>
    </UpdateCreditUsagesContext.Provider>
    </UserSubscriptionContext.Provider>
    </TotalUsagesContext.Provider>
  );
};

export default Layout;
