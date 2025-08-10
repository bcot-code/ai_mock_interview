import React from 'react'
import Agent from '@/components/Agent'
import { isAuthenticated } from "@/lib/actions/auth.action"
import { redirect } from "next/navigation"
import LogoutButton from '@/components/LogoutButton'
import { getCurrentUser } from '@/lib/actions/auth.action'


const InterviewPage = async() => {
  const isUserAuthenticated = await isAuthenticated()
  if(!isUserAuthenticated) {
    redirect('/sign-up');
  }
  const user = await getCurrentUser();
  return (
   <main>
    <h3>Interview Generation</h3>
    <Agent userName={user?.name ?? ''} userId={user?.id} type="generate"/>
    <LogoutButton />
   </main> 
  );
};

export default InterviewPage