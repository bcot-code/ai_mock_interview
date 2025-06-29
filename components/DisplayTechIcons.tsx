"use client";
import { getTechLogos, cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const DisplayTechIcons = ({ techStack }: TechIconProps) => {
    const [techIcons, setTechIcons] = useState<{ tech: string; url: string }[]>([]);
  
    useEffect(() => {
      const fetchIcons = async () => {
        const logos = await getTechLogos(techStack);
        setTechIcons(logos.slice(0, 3));
      };
      fetchIcons();
    }, [techStack]);
  
    return (
      <div className='flex flex-row gap-3'>
        {techIcons.map(({ tech, url }, index) => (
          <div key={tech} className={cn('relative group bg-dark-300 rounded-full p-2 flex-center', index >= 1 && '-ml-3')}>
            <span className='tech-tooltip'>{tech}</span>
            <Image src={url} alt={tech} width={100} height={100} className='size-5' />
          </div>
        ))}
      </div>
    );
  };
  
  export default DisplayTechIcons;