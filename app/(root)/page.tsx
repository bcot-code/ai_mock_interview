import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
import LogoutButton from '@/components/LogoutButton'


const Homepage = () => {
  return (
    <div className="w-full max-w-[1200px] px-4">
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>
            Practice on real interview questions & get instant feedback
          </p>
          <Button asChild className='btn primary max-sm:w-full'>
            <Link href="/interview">
              Start an Interview
            </Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden"/>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard { ...interview} key={interview.id}/>
          ))}
        </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an interview</h2>
        <div className='interviews-section flex gap-5 w-full'>
          {dummyInterviews.map((interview) => (
              <InterviewCard { ...interview} key={interview.id}/>
          ))}
          {/* <p>You havent done any interviews yet.</p> */}
        </div>
        <LogoutButton />
      </section>
    </div>
  )
}

export default Homepage
