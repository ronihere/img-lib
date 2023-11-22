'use client'
import { Button } from '@/components/ui/button';
import { CldImage } from 'next-cloudinary';
import React, { useReducer } from 'react'

const initialState = {
    "Blur": false,
    "Fill Background": false,
    "Blur Faces": false,
    "Oil Paint": false
}
const convertAllKeysToFalseExceptParam = (originalObj: typeof initialState, exceptionKey: string, changeBooleanVal = false) => {
    // const newObj = { ...originalObj };
    const keys = Object.keys(originalObj);
    keys.forEach((key) => {
        if (key !== exceptionKey) originalObj[key] = changeBooleanVal
    })
    console.log('ORIGINALOBJ:::', originalObj);
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'Blur':
            convertAllKeysToFalseExceptParam(state, action.type, false)
            return {
                ...state,
                [action.type]: true,
            }
        case 'Fill Background':
            convertAllKeysToFalseExceptParam(state, action.type, false)
            return {
                ...state,
                [action.type]: true,
            }
        case 'Blur Faces':
            convertAllKeysToFalseExceptParam(state, action.type, false)
            return {
                ...state,
                [action.type]: true,
            }
    }
}
export default function EditImagePage({ params, searchParams }: { params: string, searchParams: { publicId: string } }) {
    // console.log(searchParams);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <section className='my-8'>
            <div className='flex justify-between'>
                <p className="text-4xl text-slate-400 font-bold">
                    Edit {searchParams.publicId}
                </p>
            </div>
            <div className='flex gap-4 mt-8'>
                {
                    Object.keys(initialState).map((edit) => {
                        return <Button variant="default" onClick={() => dispatch({ type: edit })}>
                            {edit}
                        </Button>
                    })
                }
                {/* <Button variant="default" onClick={()=> dispatch({type:"Fill Background"})}>
                  Fill Background
              </Button> */}
            </div>
            <div className='grid grid-cols-2 mt-4'>

                <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                />

                {state['Fill Background'] ?
                    <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                        fillBackground={true}
                    />
                    : state['Blur'] ?
                        <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                            blur={true}
                        />
                        : state['Blur Faces'] ?
                            <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                                blurFaces={true}
                            />
                            : state["Oil Paint"] ?
                                <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                                    oilPaint={true}
                                />
                                : null


                }
            </div>

        </section>
    )
}
