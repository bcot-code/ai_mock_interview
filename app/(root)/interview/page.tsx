import React from 'react'
import Agent from '@/components/Agent'
import { isAuthenticated } from "@/lib/actions/auth.action"
import { redirect } from "next/navigation"
import LogoutButton from '@/components/LogoutButton'


const InterviewPage = async() => {
  const isUserAuthenticated = await isAuthenticated()
  if(!isUserAuthenticated) {
    redirect('/sign-up');
  }
  return (
   <main>
    <h3>Interview Generation</h3>
    <Agent userName="You" userId="user1" type="generate"/>
    <LogoutButton />
   </main> 
  );
};

export default InterviewPage