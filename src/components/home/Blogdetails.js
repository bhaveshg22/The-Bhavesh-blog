import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
    const { id } = useParams();
    const history=useHistory();
    const {data:blogs,Ispending,error}=useFetch(' http://localhost:8000/blogs/' +id);

    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/' + id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return (

        <div className="blog-details"> 
            {Ispending && <div> Loading...</div>}
           {error && <div> Error to load the content</div>}
           {blogs && (
               <article>
                   <h2>{blogs.title}</h2>
                   <h4>Written by {blogs.author}</h4>
                   <div className="blogdetails">{blogs.body}</div>
                   <button onClick={handleDelete}>Delete Blog</button>
               </article>
           )}
        </div>
    );
}

export default BlogDetails;