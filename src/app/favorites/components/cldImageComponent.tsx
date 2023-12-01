'use client'
import React, { useState } from 'react'
import { CldImage } from 'next-cloudinary';
import EmptyHeart from '@/components/icons/EmptyHeart';
import FullHeart from '@/components/icons/FullHeart';
import { setFavAction } from '@/app/gallery/actions/setFavAction';
import DropDownMenu from '@/app/components/DropDownMenu';
 
const CloudImageComponent = (props: any) => {
    const [tags, setTags] = useState(props.tags)
    const undoFav = async (publicId: string) => { 
        if (props.unfavhandler) {
            props.unfavhandler(publicId);
        }
        const newTags = tags.filter((tag: string) => tag !== 'favorite');
        setTags(newTags);
        if (!await setFavAction(publicId, true, props.path)) {
            setTags((prev: string[]) => [...prev, 'favorite'])
            props.setUnFavApiSuccess(false);
        }
    }
    const doFav = (publicId: string) => {
        setTags((prev: string[]) => [...prev , 'favorite'])
        if (!setFavAction(publicId, false, props.path)) {
        const newTags = tags.filter((tag: string) => tag !== 'favorite');
        setTags(newTags);
        }
    }
    return (
        <div className='relative'>
            <CldImage
                width="400"
                height="400"
                src={props.src}
                alt="Description of my image"
            />
        {
            tags.includes('favorite') ? 
            <FullHeart clickhandler={() => undoFav(props.src)} className='absolute top-2 left-2 hover:scale-110 hover:cursor-pointer transition-all'/>
                :
            <EmptyHeart clickhandler={() => doFav(props.src)} className='absolute top-2 left-2 hover:scale-110 hover:cursor-pointer transition-all' svgClassName="hover:outline-dotted hover:outline-black" />
            }
            
            <DropDownMenu publicId={ props.src} /> 
        </div>
    )
}

export default CloudImageComponent
