import React from 'react'
import dayjs from 'dayjs'
import { getRandomInterviewCover } from '@/lib/utils';
import Image from 'next/image';
import { Link } from 'lucide-react';
import { Button } from './ui/button';
import DisplayTechIcons from './DisplayTechIcons';





const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
  const formatDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');
  const badgeColor = normalizedType === 'Technical' ? 'bg-[#AAB4FF]' : 'bg-[#7A7AFF]';

  return (
    <div className="card-border w-[360px] max-sm:w-full">
      <div className="card-interview relative px-6 py-4 flex flex-col gap-4">
        {/* Badge */}
        <div className={`absolute top-2 right-2 ${badgeColor} text-white text-xs px-3 py-1 rounded-bl-lg`}>
          <p className="badge-text">{normalizedType}</p>
        </div>

        {/* Top Row: Avatar + Title */}
        <div className="flex items-center gap-4">
          <Image
            src={getRandomInterviewCover()}
            alt="cover image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <h3 className="text-base font-semibold capitalize mt-3">
            {role} Interview
          </h3>
        </div>

        {/* Date + Score */}
        <div className="flex gap-6 text-sm text-light-100">
          <div className="flex items-center gap-2">
            <Image src="/calendar.svg" alt="calendar" width={18} height={18} />
            <p>{formatDate}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/star.svg" alt="star" width={18} height={18} />
            <p>{feedback?.totalScore || '--'}/100</p>
          </div>
        </div>

        {/* Message */}
        <p className="text-sm text-light-100 leading-5">
          {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills."}
        </p>

        {/* Bottom: Tech + Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
          <div className="flex gap-2 text-light-100">
            <DisplayTechIcons techStack={techstack}/>
          </div>
          <Button asChild className="btn-primary text-sm px-4 py-2 w-fit sm:w-auto self-end sm:self-auto">
            <Link href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}>
              {feedback ? 'Check Feedback' : 'View Interview'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};


export default InterviewCard