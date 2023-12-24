import NavigationMenu from '@/app/ui/products/decks/navigation-menu'
import React from 'react'

export default function LayoutBoardShop({children}: {children: React.ReactNode}) {
  return (
    <div>
        {children}
        <NavigationMenu />
    </div>
  )
}
