import React from 'react'
import cloudinary from "cloudinary"
import ImageGrid from '@/components/ui/imageGrid'
import CloudImageComponent from '@/app/components/CloudImageComponent'
import { ForceRefresh } from '@/app/components/ForceRefresh'
export default async function SingleAlbumView({
    params: { albumName }
}: {
    params: {
        albumName: string
    }
}) {
    // console.log(':::params', albumName)
    const assetsList = await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${albumName}`)
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute()



    return (
        <div className='my-8'>
            <ForceRefresh/>
            <ImageGrid listOfList={assetsList.resources} component={(comp) =>
                <CloudImageComponent key={comp.public_id} src={comp.public_id} tags={['favorite']} alt={comp.url} path={`/albums/${albumName}`} />} />
        </div>
    )
}
