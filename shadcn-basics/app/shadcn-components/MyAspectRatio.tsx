import React from 'react'
import Image from "next/image"

import MyAvatar from './MyAvatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const MyAspectRatio = () => {
  return (
    <div className='w-[200px]'>
      <AspectRatio ratio={1 / 1}>
        <Image
          src="https://images.unsplash.com/photo-1733690577845-4f4641a456b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
      <MyAvatar />
    </div>
  );
}

export default MyAspectRatio