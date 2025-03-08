import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink,Link } from "react-router-dom"; 


const PostsList = () => {

  const [posts, setPosts] = useState({
    id:'',
    title:'',
    content:'',
    image:'',
    tags:'',    
  }

  );

  const url = import.meta.env.VITE_ENDPOINT_URL;

  useEffect(() => { 
    axios.get(url)
    .then((response) => {
      setPosts(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  } , []);


  return (

   <>
    <h1>Posts List</h1>
    <div className = "container"> 
      <div className = "row">

      return === null ?
           <div >loading</div>
        ) : ( 
        {posts.map((elem) => (

           const {id, title,content, image, tags} = elem;

        

          <div className = "col-md-3" key={id}>
            <div className = "card">
              <div className = "card-body">
                <h4 className = "card-title">{title}</h4>
                <p className = "card-text">{tages}</p>

                 <Link to={`/posts/${id}`}>
                  <button>Vai al Post</button>
                </Link>

                 

              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
    </>
  );
    
  
}

export default PostsList;