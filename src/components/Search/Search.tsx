
// @flow 
import * as React from 'react';
import { useAppDispatch } from '../../hooks';
import { updateSearch } from '../redux/gallerySlice';

export const Search = () => {
    const dispatch = useAppDispatch();


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{

        dispatch(updateSearch(e.target.value))
    }

    return (
        <div className='mx-5'>
           <strong>Search:</strong> <input className='w-100' onChange={handleChange} placeholder='Search by kanji, or translation'/> 
        </div>
    );
}