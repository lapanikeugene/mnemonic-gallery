
import { useEffect, useState } from 'react';
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks'
import { getGalleryAction } from './components/redux/getGalleryAction';
import { GalleryItemType } from './components/GalleryItems/Type/GalleryItemType';
import { Search } from './components/Search/Search';
import { ModalFullInfo } from './components/Modal/ModalFullInfo';
import { CardGalleryItem } from './components/GalleryItems/Card';

function App() {
  const dispatch = useAppDispatch();
  const gallerySelector = useAppSelector(s=>s.galleryReducer.GalleryItems);
  const searchTerm = useAppSelector(s=>s.galleryReducer.search);
  const [galleryItems,setGallleryItems ] = useState<GalleryItemType[]>([]);
  useEffect(()=>{
    dispatch(getGalleryAction());
  },[])

  useEffect(()=>{
    setGallleryItems(gallerySelector);

  },[gallerySelector])

  useEffect(()=>{
    if(gallerySelector.length===0) return;
    if(searchTerm.length>0){
      console.log('check search',searchTerm);
     
     let arr:GalleryItemType[] = gallerySelector.filter(s=>
        {
          console.log(s.title,searchTerm, s.title === searchTerm);
          return s.title === searchTerm} ) || [];
      console.log('if it kanji?',arr);
      if(arr.length===0)
      arr= gallerySelector.filter(s=>s.translation.includes(searchTerm))  || [];

      setGallleryItems(arr);


    }else{
      setGallleryItems(gallerySelector) 
    }

  },[searchTerm, gallerySelector])

  return (
    <>
      <ModalFullInfo />
      <Search />
      <div className='my-3 mt-5 row  row-cols-1 row-cols-md-5 mb-3 text-center'>
        {galleryItems.length===0? <>Loading...</> :
          galleryItems.map((a,i)=>{
            return(
              <CardGalleryItem key={`card-${i}`} 
                    kanji={a.title} 
                    img={a.img} 
                    on={a.on} 
                    kun={a.kun} 
                    translation={a.translation} 
                    mnemonic={a.mnemonic} 
                    descr={a.description}/>
            )
          })
        }

        </div>
    </>
  )
}

export default App
