import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getGalleryAction } from "./getGalleryAction";
import { GalleryItemType } from "../GalleryItems/Type/GalleryItemType";
import { InitState } from "./InitState";



const gallerySlice = createSlice({
    name:'gallery',
    initialState:InitState,
    reducers:{
        updateSearch:(state,action:PayloadAction<string>)=>{
            state.search = action.payload;
            console.log(state.search);
        },
        setKanjiToModal:(state,action:PayloadAction<string>)=>{
            state.modalKanjiToShow = action.payload

        }
    },
    extraReducers:{

    [getGalleryAction.fulfilled.type]:(state,action:PayloadAction<any[]>)=>{
        // console.log('in actions:',action.payload);
        const arr:GalleryItemType[] = [];
        for(const item of action.payload){
            console.log('item',item);
            arr.push({
                img: item?.mnemonicImage?.imagefile.sourceUrl || "",
                title: item?.title|| "",
                kun: item?.textInfo.kun || "",
                on: item?.textInfo.on || "",
                translation: item?.textInfo.translate || "",
                description: item?.textInfo.description || "",
                mnemonic: item?.textInfo.mnemonic || ""
            })
        }
        console.log(arr);
    state.GalleryItems = arr;
    }
    

    },
})

export const {updateSearch,setKanjiToModal} = gallerySlice.actions;

export default gallerySlice.reducer;