import React from 'react'
import cloudinary from "cloudinary"
import CloudImageComponent from '../components/CloudImageComponent'
import ImageGrid from '@/components/ui/imageGrid'
const FavoritePage = async() => {
    const results = await cloudinary.v2.api.resources_by_tag("favorite")
  return (
    <section className='py-8'>
            <div className='flex justify-between'>
            <p className="text-4xl text-slate-400 font-bold">
                Favorites
            </p>
            </div>
            {/* <div className='flex gap-14 flex-wrap mt-10'>
            {
                results.resources.map((result) => {
                    return <CloudImageComponent key={result.public_id} src={result.public_id} tags={['favorite']} alt={result.url} path={"/favorites"} />
                })
            }
            </div> */}
          <ImageGrid listOfList={results.resources} component={(comp) =>
        <CloudImageComponent key={comp.public_id} src={comp.public_id} tags={['favorite']} alt={comp.url} path={"/favorites"} />} />
        </section>
  )
}

export default FavoritePage
