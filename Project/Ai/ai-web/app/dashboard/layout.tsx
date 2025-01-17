import { Sidebar } from 'lucide-react';
import React from 'react'
import SideNav from './_components/SideNav';
import { Header } from './_components/Header';

const layout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            <div>
                <div className='md:w-65 hidden md:block fixed'>
                    <SideNav />
                </div>
            </div>
            <div className='md:ml-64'>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default layout