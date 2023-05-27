import {GalleryItemType} from '../GalleryItems/Type/GalleryItemType'
export type InitStateType = {
    GalleryItems:GalleryItemType[],
    search:string,
    modalKanjiToShow:string, 
}

export const InitState:InitStateType ={
    GalleryItems:[],
    search:'',
    modalKanjiToShow:'',
}