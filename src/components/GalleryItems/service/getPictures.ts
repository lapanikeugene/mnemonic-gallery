import axios from "axios";
import { graphqlQuery } from "./graphqlQuery";

export const getPictures = async()=>{
    console.log('show url:',import.meta.env.VITE_URL)
    const res = await axios.get(import.meta.env.VITE_URL,
    {
        params:{
            query:graphqlQuery
        }
    })

    return res.data.data.posts.nodes;
 

}