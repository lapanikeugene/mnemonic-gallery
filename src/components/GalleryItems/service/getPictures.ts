import axios from "axios";
import { graphqlQuery } from "./graphqlQuery";

export const getPictures = async()=>{

    const res = await axios.get('',
    {
        params:{
            query:graphqlQuery
        }
    })

    return res.data.data.posts.nodes;
 

}