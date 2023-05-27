
import { useEffect, useState } from 'react';
import './App.css'
import { Card } from './components/Card'
import { useAppDispatch, useAppSelector } from './hooks'
import { getGalleryAction } from './components/redux/getGalleryAction';
import { GalleryItemType } from './components/Type/GalleryItemType';

function App() {
  const dispatch = useAppDispatch();
  const gallerySelector = useAppSelector(s=>s.galleryReducer.GalleryItems);
  const [galleryItems,setGallleryItems ] = useState<GalleryItemType[]>([]);
  useEffect(()=>{
    dispatch(getGalleryAction());
  },[])

  useEffect(()=>{
    setGallleryItems(gallerySelector);

  },[gallerySelector])

  return (
    <>
      <div className='my-3 mt-5 row  row-cols-1 row-cols-md-5 mb-3 text-center'>
        {
          galleryItems.map((a,i)=>{
            return(
              <Card key={`card-${i}`}/>
            )
          })
        }

        </div>
    </>
  )
}

export default App
