import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SinglePost = () => {
 
    const { id } = useParams();
    
    const [post, setPost] = useState({
            id:'',
            tittle:'',
            content:'',
            image:'',
            tags:'',
    }
    );
    const url = import.meta.env.VITE_ENDPOINT_URL; 


    useEffect(() => {
        retourn (
            axios.get(`${url}/${id}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        );

    return (
        <h1>Single Post: {post.tittle}</h1>
      
    );
      
    }
  
  export default SinglePost;