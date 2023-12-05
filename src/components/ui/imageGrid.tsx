import CloudImageComponent from '@/app/components/CloudImageComponent';
import React from 'react'
type TImageGrid = {
    listOfList: any[],
    maxCol?: number,
    component : (list : any)=> React.ReactNode
}
export default function ImageGrid(
    { listOfList, maxCol , component }: TImageGrid) {
    const MAX_COL = maxCol ? maxCol : 4;
    function getColumns(colNum: number) {
        return listOfList.filter((item, idx) => idx % MAX_COL === colNum);
    }
  return (
      //   <div className='grid grid-cols-4 gap-4 my-8'>
    <div className='grid grid-cols-2 gap-2 my-2 md:grid-cols-4 md:gap-4 md:my-8'>
          {
                    [getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((col, index) =>
                        <div key={index} className="flex flex-col gap-4">
                            {
                                col.map((result: any) =>
                                    // <CloudImageComponent key={result.public_id} src={result.public_id} tags={result.tags} alt={result.url} path="/gallery" />
                                    component(result)
                                )
                            }
                        </div>
                    )
                }
      
    </div>
  )
}
