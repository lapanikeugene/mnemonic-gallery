// @flow 
import * as React from 'react';
import parse from 'html-react-parser';

type CardType ={
    kanji:string,
    img:string,
    on:string,
    kun:string,
    translation:string,
    mnemonic:string,
    descr:string,
}

export const Card = (props:CardType) => {
    return (
        <div className='card mx-1 my-1' style={{minWidth:'250px',}}>
            <div className="card-header text-center"><h3 className="card-title">{props.kanji}</h3></div>

             <img className=""
             style={{width:'250px',objectFit:'contain'}} 
             src={props.img} alt="Card image cap" />
    <div className="card-body">
    <div className='p-2 bg-light mb-3'
        style={{borderLeft: '4px solid #5bc0de',}}    
        >
    {parse(props.mnemonic) }        

    </div>



      <div className='d-flex justify-content-around'>
      <p className="card-text">On: <strong>{props.on}</strong></p>
      <p className="card-text">Kun: <strong>{props.kun}</strong> </p>
      </div>
      <p className="card-text text-start"><strong>Translation</strong>: {props.translation}</p>
      <p className="card-text text-start" ><strong>Description</strong>: {parse(props.descr) }</p>
    
    </div>
            
        </div>
    );
};