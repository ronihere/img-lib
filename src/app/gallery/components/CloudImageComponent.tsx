'use client'
import React from 'react'
import { CldImage } from 'next-cloudinary';
 

const CloudImageComponent = (props : any) => {
  return (
    <CldImage
  width="250"
height="300"
      
  {...props}
  alt="Description of my image"
/>
  )
}

export default CloudImageComponent
