import type { Metadata } from 'next';
import { ThemeProvider } from '@/app/providers'
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
//import { Inter } from 'next/font/google'
import '@/app/globals.css';
//const inter = Inter({ subsets: ['latin'] })
import { ShoppingCartProvider } from '@/app/context/cart-context'; 

export const metadata: Metadata = {
  title: {
    //absolute: "",
    default: "Nextjs 14 Skateboard",
    template: "%s | Shop"
  },
  description: 'Generated by NextJS14',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='bg-background'>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ShoppingCartProvider>
            <Header />
              {children}
            <Footer />
          </ShoppingCartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}