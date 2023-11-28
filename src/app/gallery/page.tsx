import cloudinary from 'cloudinary'
import UploadButton from "./components/UploadButton"
import CloudImageComponent from '../components/CloudImageComponent';
import ImageGrid from '@/components/ui/imageGrid';
import SearchGallery from './components/SearchGallery';

type TResult = {
    public_id: string;
    url: string;
    tags: string[]
}


const GalleryView = async ({ searchParams: {search} }: {
    searchParams: {
    search: string
}}) => {
    const results = await cloudinary.v2.search
        .expression(`resource_type:image ${search ? `AND tags=${search}` : ``}`)
        .with_field('tags')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute() as { resources: TResult[] }
    return (
        <section className='my-8'>
            <div className='flex justify-between'>
                <p className="text-4xl text-slate-400 font-bold">
                    Gallery
                </p>
                <UploadButton />
            </div>
            <div className='mt-8'>
            <SearchGallery initialSearch={search } />
            <ImageGrid listOfList={results.resources} component={(comp) =>
                <CloudImageComponent key={comp.public_id} src={comp.public_id} tags={comp.tags} alt={comp.url} path="/gallery" />
            } />
            </div>
        </section>
    )
}

export default GalleryView
