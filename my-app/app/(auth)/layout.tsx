//"use client";

import SideNav from '@/app/ui/auth/sidenav';
import InputUi from '@/app/ui/auth/inputui';

export default function AuthLayout({children}: {children: React.ReactNode}) {

    return (
        <div className='min-h-screen bg-slate-100 dark:bg-slate-900 '> 

            <SideNav />
            
            <InputUi />

            {children}
        </div>
    )
}

// Same template by route & same SideNav for all routes.
// In resume, ui could be display for several routes with preserved state !
// (and each route corresponding for each template, that's different)