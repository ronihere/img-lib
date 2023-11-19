
import cloudinary from 'cloudinary'
import UploadButton from "./components/UploadButton"
import CloudImageComponent from './components/CloudImageComponent';
type TResult = {
    public_id: string;
    url: string;
    tags: string[]
}
const GalleryView = async () => {

    const results = await cloudinary.v2.api
        .resources({ max_results: 30, tags: true})
        .then(result => result) as { resources: TResult[] };
    // console.log(':::RESULTS', results.resources[0]);
    return (
        <section className='py-8'>
            <div className='flex justify-between'>
            <p className="text-4xl text-slate-400 font-bold">
                Gallery
            </p>
            <UploadButton />
            </div>
            <div className='flex gap-14 flex-wrap mt-10'>
            {
                results.resources.map((result) => {
                    return <CloudImageComponent key={result.public_id} src={result.public_id} tags={result.tags} alt={result.url} path="/gallery" />
                })
            }
            </div>
        </section>
    )
}

export default GalleryView
