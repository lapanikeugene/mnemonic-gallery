// @flow 
import * as React from 'react';

export const Card = () => {
    return (
        <div className='card mx-1 my-1' style={{minWidth:'250px',}}>
            <div className="card-header text-center"><h3 className="card-title">議</h3></div>

             <img className=""
             style={{width:'250px',objectFit:'contain'}} 
             src="https://gallery.eugenelapanik.com/wp-content/uploads/2023/05/議-debate-sheeps-about-gifts.png" alt="Card image cap" />
    <div className="card-body">
    <div className='p-2 bg-light mb-3'
        style={{borderLeft: '4px solid #5bc0de',}}    
    ><strong><span style={{"color": "#333399;"}}>Debate</span> </strong>of sheeps about <strong><span style={{"color": "#00ff00;"}}>gi</span></strong>fts
    </div>



      <div className='d-flex justify-content-around'>
      <p className="card-text">On: <strong>ギ</strong></p>
      <p className="card-text">Kun: <strong>-</strong> </p>
      </div>
      <p className="card-text text-start"><strong>Translation</strong>: eliberation, consultation, debate, consideration</p>
      <p className="card-text text-start" ><p>The left part of kanji looks like gift, top right is kanji of sheep. Bottom right part looks like microphones</p></p>
      <p className="card-text text-start"></p>
    
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
            
        </div>
    );
};