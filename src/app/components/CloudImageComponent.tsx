'use client'
import React from 'react'
import { CldImage } from 'next-cloudinary';
import EmptyHeart from '@/components/icons/EmptyHeart';
import FullHeart from '@/components/icons/FullHeart';
import { setFavAction } from '../gallery/actions/setFavAction';
import DropDownMenu from '@/app/components/DropDownMenu';


const CloudImageComponent = (props: any) => {
    const undoFav = (publicId : string) => { 
        setFavAction(publicId, true , props.path);
    }
    const doFav = (publicId: string) => {
        setFavAction(publicId, false, props.path);
    }
    return (
        <div className='relative'>
            <CldImage
                width="400"
                height="400"
                {...props}
                alt="Description of my image"
            />
        {
            props.tags.includes('favorite') ? 
            <FullHeart clickHandler={() => undoFav(props.src)} className='absolute top-2 left-2 hover:scale-110 hover:cursor-pointer transition-all'/>
                :
            <EmptyHeart clickHandler={() => doFav(props.src)} className='absolute top-2 left-2 hover:scale-110 hover:cursor-pointer transition-all' svgClassName="hover:outline-dotted hover:outline-black" />
            }
            
            <DropDownMenu publicId={ props.src} /> 
            {/* <Modal/> */}
        </div>
    )
}

export default CloudImageComponent
