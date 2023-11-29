import GalleryView from './gallery/page'
export default function Home({ params }: { params: any }) {
  return (
    <main className="">
      <GalleryView searchParams={{ search: '' }}/>
    </main>
  )
}
