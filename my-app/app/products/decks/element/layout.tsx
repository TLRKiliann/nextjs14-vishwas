import React from 'react';
import NavigationMenu from '@/app/ui/products/decks/navigation-menu';

export default function LayoutBoardShop({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
            <NavigationMenu />
        </div>
    )
}
