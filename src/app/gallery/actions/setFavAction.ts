"use server"
import cloudinary from "cloudinary"
export async function setFavAction(publicId:string , isFavorite: boolean, path : string = '') {
    if (!isFavorite) {
        try {
            const res = await cloudinary.v2.uploader.add_tag('favorite', [publicId]);
            return true;
        } catch (err) {
            console.log('FAV err:::', err);
            return false;
        }
    }
    else {
        try {
            // throw new Error();
            const res = await cloudinary.v2.uploader.remove_tag('favorite', [publicId]);
            console.log(':::UnFav', res);
            return true;
        } catch (error) {
            console.log('error unFav:::', error);
            return false;
        }    
    }
    
}