import React from 'react'
import cloudinary from "cloudinary"
import { ForceRefresh } from '../components/ForceRefresh'
import OptimisticFavorites from './components/OptimisticFavorites'
const FavoritePage = async ({ searchParams: {search} }: {
    searchParams: {
    search: string
    }
}) => {
  const response = await getData();
  const results = !search && response.props.results;
  return (
    <section className='py-8'>
            <div className='flex justify-between'>
            <p className="text-4xl text-slate-400 font-bold">
                Favorites
            </p>
            </div>
      <OptimisticFavorites results={results} />
        </section>
  )
}

export async function getData() {
  const results = await cloudinary.v2.api.resources_by_tag("favorite")
  console.log('getdata')
  return {
    props: {
      results,
    },
    // This request should be refetched on every request.
    // Similar to getServerSideProps.
    cache: 'no-store',
  }
}

export default FavoritePage
