//import Link from 'next/link';
import { signOut } from '@/auth';
import { BiLogOutCircle } from "react-icons/bi";

export default function LogOut() {
  return (

    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      
      <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md 
          bg-gray-50 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 
          md:flex-none md:justify-start">
          <BiLogOutCircle className="w-6" />
          <div className="hidden md:block">
              Sign Out
          </div>
      </button>

    </form>
  );
}