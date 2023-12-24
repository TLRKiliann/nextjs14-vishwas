import React from 'react';
import type { Metadata } from 'next';
import MenuDecks from '@/app/ui/products/decks/menu-decks';
// import NavigationMenu from '@/app/ui/products/decks/navigation-menu';

export const metadata: Metadata = {
  title: "decks",
  description: "access accepted"
}

export default function BoardShop() {
  return (
    <div className='min-h-screen bg-transparent'>
    
      <MenuDecks />

      {/* <NavigationMenu /> */}

    </div>
  )
}
