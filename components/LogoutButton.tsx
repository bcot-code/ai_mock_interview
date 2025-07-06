'use client';

import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/client';
import { Button } from '@/components/ui/button';


const LogoutButton = () => {
    const router = useRouter();
    const handleLogout = async () =>{
        try{
            //1. Sign out from Firebase Auth
            console.log('1. Sign out from Firebase Auth');
            await signOut(auth);
            //2.Remove session from server
            console.log('2.Remove session from server');
            const res = await fetch('/api/sign-out', { 
              method: 'POST',
              credentials: 'include'
            });
            const result = await res.json();
            //3.Redirect to sign-in
            console.log('3.Redirect:', result);

            console.log('4.Redirecting ... ');
            router.push('/sign-in');
            router.refresh();
        } catch(e){
            console.log('Logout failed:', e);
        }
    }
  return (
    <Button onClick={handleLogout} className='btn mt-4'>LogoutButton</Button>
  )
}

export default LogoutButton