'use client'
import { Button } from '@/components/ui/button';
import { CldImage } from 'next-cloudinary';
import React, { useReducer, useState } from 'react'
import SingleInputModal from './components/AiFillModal';
import UnEditedImage from './components/UnEditedImage';

const initialState = {
    'Clear Filters': false,
    "Blur": false,
    "Fill Background": false,
    "Blur Faces": false,
    "Oil Paint": false,
    "Ai Fill": false,
    'Remove Background': false,
}
const convertAllKeysToFalseExceptParam = (originalObj: any, exceptionKey: string, changeBooleanVal = false) => {
    // const newObj = { ...originalObj };
    const keys = Object.keys(originalObj);
    keys.forEach((key) => {
        if (key !== exceptionKey) originalObj[key] = changeBooleanVal
    })
}


const reducer = (state : any, action : any) => {
    switch (action.type) {
        case 'Ai Fill':
            convertAllKeysToFalseExceptParam(state, action.type, false)
            return {
                ...state,
                [action.type]: true,
            }
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
        case 'Oil Paint':
            convertAllKeysToFalseExceptParam(state, action.type, false)
            return {
                ...state,
                [action.type]: true,
            }
        case 'Clear Filters':
            convertAllKeysToFalseExceptParam(state, action.type, false)
            return {
                ...state,
                [action.type]: true
            }
        case 'Remove Background':
            convertAllKeysToFalseExceptParam(state, action.type, false)
            return {
                ...state,
                [action.type]: true
            }
        default:
            throw Error('Invalid type for dispatch')
    }
}
export default function EditImagePage({ params, searchParams }: { params: string, searchParams: { publicId: string } }) {
    // console.log(searchParams);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [aimgPrompt, setAimgPrompt] = useState('');
    const FillWithAiHandler = () => {
         dispatch({ type: 'Ai Fill'})
    }
    return (
        <section className='md:my-8'>
            <div className='flex flex-col items-center justify-between'>
                <p className='text-2xl font-extrabold'>Edit Image</p>
                <p className="text-xl md:text-4xl text-slate-400">
                    <span className='font-bold'>
                    ID:
                    </span>
                    {searchParams.publicId}
                </p>
            </div>
            <div className='flex gap-4 mt-8 flex-wrap items-center'>
                {
                    Object.keys(initialState).map((edit) => {
                        if (edit === 'Ai Fill') return null;
                        return <Button variant="default" key={edit} onClick={() => dispatch({ type: edit })}>
                            {edit}
                        </Button>
                    })
                }
                {/* <Button variant={"destructive"} onClick={openPrompt}>AI Fill</Button> */}
                <SingleInputModal inputState={aimgPrompt} setInputState={setAimgPrompt} clickhandler={FillWithAiHandler} title='Edit as you like!' description='name the item you want to add in this image!' inputTitle='Item Name:' />
                {/* <Button variant="default" onClick={()=> dispatch({type:"Fill Background"})}>
                  Fill Background
              </Button> */}
            </div>
            <div className='flex flex-col items-center mt-2 gap-4 md:grid md:grid-cols-2 md:mt-4'>

                <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                />
                <div className='border border-white px-4 py-1 md:hidden'>Edited Image</div>
                {
                    state['Fill Background'] ?
                        <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                            fillBackground
                    />
                        : state['Ai Fill'] ?
                    <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                            fillBackground={{
                            prompt: aimgPrompt
                        }}
                    />
                    : state['Blur'] ?
                        <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                            blur="1200"
                        />
                        : state['Blur Faces'] ?
                            <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                                blurFaces={true}
                            />
                            : state["Oil Paint"] ?
                                <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                                    oilPaint={true}
                                />
                                        : state["Remove Background"] ?
                                          <CldImage width={400} height={400} src={searchParams.publicId} alt='some img'
                                    removeBackground
                                />  
                                :            <UnEditedImage />


                }
            </div>

        </section>
    )
}
