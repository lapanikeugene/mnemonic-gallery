// @flow 
import * as React from 'react';
import parse from 'html-react-parser';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks';
import { setKanjiToModal } from '../redux/gallerySlice';

type CardType ={
    kanji:string,
    img:string,
    on:string,
    kun:string,
    translation:string,
    mnemonic:string,
    descr:string,
}

export const CardGalleryItem = (props:CardType) => {
    const dispatch = useAppDispatch()

    const handleShowModal = ()=>{
        dispatch(setKanjiToModal(props.kanji))
    }

    return (
        <Card className=' mx-1 my-1 p-0' style={{minWidth:'280px',}}>
            <Card.Header className="text-center"><h3 className="card-title">{props.kanji}</h3></Card.Header>
            <div className='d-flex justify-content-center'>
            <img className=""
             onClick={handleShowModal}
             style={{width:'280px',objectFit:'contain'}} 
             src={props.img} alt="Card image cap" />
            </div>
            
    <div className="card-body p-1 h-100">
    <div className='p-2 bg-light mb-3'
        style={{borderLeft: '4px solid #5bc0de',}}    
        >
    {parse(props.mnemonic||"") }        

    </div>



      <div className='d-flex justify-content-around'>
      <div className="card-text"
          style={{color: 'green',}}  >On: <strong>{props.on}</strong></div>
      <p className="card-text">Kun: <strong>{props.kun}</strong> </p>
      </div>
      <p className="card-text text-start"><strong>Translation</strong>: {props.translation}</p>
      
      
    </div>
    <Card.Footer className="text-muted">
        <Button variant='primary' onClick={handleShowModal}  >Full Info</Button>
      </Card.Footer>
        </Card>
    );
};