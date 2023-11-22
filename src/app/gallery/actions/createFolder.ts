"use server"
import cloudinary from 'cloudinary'
import { revalidatePath } from 'next/cache';
export async function CreateFolder(publicId : string, folderName : string, revalidatepath: string) {
    console.log('PublicId:::', publicId);
    const tempPublicId = publicId.split('/');
    const imageName = tempPublicId[tempPublicId.length - 1];
    const folderCreationResponse = await cloudinary.v2.api.create_folder(folderName);
    const movingImageResponse = await cloudinary.v2.uploader.rename(publicId, `${folderName}/${imageName}`)
    revalidatePath(revalidatepath);
}