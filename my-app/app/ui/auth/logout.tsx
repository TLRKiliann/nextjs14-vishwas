//import Link from 'next/link';
import { signOut } from '@/auth';
import BtnLogout from './btn-logout';

 
export default function LogOut() {
  return (

    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <BtnLogout />
    </form>

  );
}