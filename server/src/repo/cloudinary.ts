import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});


class Cloud {
    public static async uploadImage(img : any){
        const result = await cloudinary.uploader
        .upload(img, {
            folder : "ltnc",
            resource_type : "auto"
        })
        return result.url
    }
}

export default Cloud