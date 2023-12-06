'use client'
import { Button } from '@/components/ui/button'
import { CldUploadButton } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import React from 'react'

const UploadButton = () => {
    const router = useRouter();
    const successHandler = async (result, { widget }) => {
        // console.log('In Handler:::', result);
        widget.close();
        await new Promise(res => setTimeout(res, 10000));
        router.refresh();
    }
    return (
        <Button asChild>
            <CldUploadButton  onSuccess={successHandler} uploadPreset="checking" >
                <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <p className='text-xl font-semibold'>Upload</p>
                </div>
            </CldUploadButton>

        </Button>
    )
}

export default UploadButton
