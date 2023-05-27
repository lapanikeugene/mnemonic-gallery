import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPictures } from "../service/getPictures";


export const getGalleryAction = createAsyncThunk(
    'getgalleryaction',
   async ()=>{
    try{
        const res = await getPictures();
        return res;
    }
    catch(e:any){
        console.log(e);
    }
     
   }
)