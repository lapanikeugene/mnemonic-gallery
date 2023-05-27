// @flow 
import * as React from 'react';
import { Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setKanjiToModal } from '../redux/gallerySlice';
import { GalleryItemType } from '../GalleryItems/Type/GalleryItemType';
import parse from 'html-react-parser';


export const ModalFullInfo = () => {
    const dispatch = useAppDispatch();
  const s = useAppSelector(s=>s.galleryReducer.modalKanjiToShow);
  const kanjidb = useAppSelector(s=>s.galleryReducer.GalleryItems);
  const [lgShow,setLgShow] = React.useState(false);
  const [info,setInfo] =React.useState<GalleryItemType>({
      img: '',
      title: 'Loading...',
      kun: '',
      on: '',
      translation: '',
      description: '',
      mnemonic: '',
  })

    React.useEffect(()=>{
      setLgShow(s.length>0)

      if(s.length===0) return;

      setInfo(kanjidb.filter(a=>a.title===s)[0]||{
        img: '',
        title: 'Loading...',
        kun: '',
        on: '',
        translation: '',
        description: '',
        mnemonic: '',
    } );


    },[s])

    const handleHide = ()=>{
      dispatch(setKanjiToModal(''));
    }
    return (
        <Modal
        size="lg"
        show={lgShow}
        onHide={handleHide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Full information about mnemonic Image for kanji {s} 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center'>
          <img src={info.img} style={{maxWidth:'500px', margin:'0 auto'}} />
          </div>
          <div className='p-2 bg-light mb-3'
        style={{borderLeft: '4px solid #5bc0de',}}    
        >
    {parse(info.mnemonic||"") }        

    </div>



      <div className='d-flex justify-content-around'>
      <p className="card-text">On: <strong>{info.on}</strong></p>
      <p className="card-text">Kun: <strong>{info.kun}</strong> </p>
      </div>
      <p className="card-text text-start"><strong>Translation</strong>: {info.translation}</p>
      <div className="card-text text-start" ><strong>Description</strong>: {parse(info.description||"") }</div>

        </Modal.Body>
      </Modal>
    );
};