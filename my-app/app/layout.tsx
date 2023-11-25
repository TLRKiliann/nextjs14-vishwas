import type { Metadata } from 'next';
import Header from './ui/header';
import Footer from './ui/footer';
//import { Inter } from 'next/font/google'
import './globals.css';

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    //absolute: "",
    default: "NextJS14 tutorial",
    template: "%s | Codeevolution"
  },
  description: 'Generated by NextJS14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}