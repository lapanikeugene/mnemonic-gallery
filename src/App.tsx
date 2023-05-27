
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
              <Card key={`card-${i}`} 
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
