
import cloudinary from 'cloudinary'
import UploadButton from "./components/UploadButton"
import CloudImageComponent from './components/CloudImageComponent';
type TResult = {
    public_id: string,
    url : string
}
const GalleryView = async () => {

    const results = await cloudinary.v2.api
        .resources({ max_results: 30})
        .then(result => result) as {resources : TResult[]};
    return (
        <section className=' py-8'>
            <div className='flex justify-between mr-16'>
            <p className="text-4xl text-slate-400 font-bold">
                Gallery
            </p>
            <UploadButton />
            </div>
            <div className='flex gap-14 flex-wrap mt-10'>
            {
                results.resources.map((result) => {
                    return <CloudImageComponent key={result.public_id} src={result.public_id} alt={result.url} />
                })
            }
            </div>
        </section>
    )
}

export default GalleryView
