'use client'
import CloudImageComponent from '@/app/favorites/components/cldImageComponent'
import ImageGrid from '@/components/ui/imageGrid'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function OptimisticFavorites({ results }: any) {
  const [imgList, setImgList] = useState(results.resources);
  const [unFavApiSuccess, setUnFavApiSuccess] = useState(true);
  let imageToBeDeleted=useRef(null); 

  useEffect(() => {
    // console.log('in useEff' , imageToBeDeleted.current);
    if (!unFavApiSuccess && imageToBeDeleted.current) {
      setImgList([...imgList, imageToBeDeleted.current]);
      setUnFavApiSuccess(true)
      // console.log('setting new img')
      imageToBeDeleted.current = null;
    }
  },[unFavApiSuccess])
  
    const unfavhandler = useCallback((id : string) => {
      imageToBeDeleted.current = imgList.find((img:ImageType) => img.public_id === id);
      const tempList = imgList.filter((img:ImageType) => img.public_id !== id);
      setImgList(tempList);
      // router.refresh();
      console.log('refreshing:::');
    // Do something with tempList, such as updating state
}, [imgList]);
    
  return (
    <>
      <ImageGrid listOfList={imgList} component={(comp) =>
        <CloudImageComponent key={comp.public_id} src={comp.public_id} tags={['favorite']} alt={comp.url} path={"/favorites"} unfavhandler={unfavhandler} setUnFavApiSuccess={setUnFavApiSuccess } />} />
    </>
  )
}
// favHandler={favHandler} unfavhandler={unfavhandler}
