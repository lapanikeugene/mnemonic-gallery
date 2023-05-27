
// @flow 
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks';
import { updateSearch } from '../redux/gallerySlice';

export const Search = () => {
    const dispatch = useAppDispatch();


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{

        dispatch(updateSearch(e.target.value))
    }

    return (
        <div>
            <input className='w-100' onChange={handleChange} placeholder='Search by kanji, or translation'/> 
        </div>
    );
}