import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import React from 'react'

const TopNav = () => {
    return (
      <div className='border-b'>
      <div className='flex h-16 items-center px-2 md:px-8 text-md md:text-lg font-semibold'>Edit Gallery
                <div className='ml-auto flex items-center space-x-4'>
                     <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
          </div>
      
    </div>
      </div>
  )
}

export default TopNav
