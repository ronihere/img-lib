import cloudinary from 'cloudinary'
import ImageGrid from '@/components/ui/imageGrid';
import { CldImage } from 'next-cloudinary';
import CloudImageComponent from '../components/CloudImageComponent';
import { AlbumCard } from './components/albumCard';
type TResult = {
    public_id: string;
    url: string;
    tags: string[]
}


const AlbumPage = async () => {
    const folders = await cloudinary.v2.api.root_folders()
    return (
        <section className='my-8'>
            <div className='flex justify-between'>
                <p className="text-4xl text-slate-400 font-bold">
                    Albums
                </p>
            </div>
            <div className='mt-8 flex flex-wrap gap-4'>
                {
                    folders.folders.map((folder: { name: string; path: string }, index: number) => {
                        return <AlbumCard key={folder.name} {...folder} />
                    })
                }
            </div>
          
            
        </section>
    )
}

export default AlbumPage
