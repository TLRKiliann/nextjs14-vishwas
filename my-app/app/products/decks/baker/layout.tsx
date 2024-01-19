import React from 'react';
import NavigationMenu from '@/app/ui/products/decks/navigation-menu';
import NavigationWheels from '@/app/ui/products/wheels/navigation-wheels';

export default function LayoutBoardShop({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
            <div className='fixed'>
                <NavigationMenu />
                <NavigationWheels/>
            </div>
        </div>
    )
}
