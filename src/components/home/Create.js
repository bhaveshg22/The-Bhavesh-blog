import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author,setAuthor]=useState('Bhavesh');
    const [Ispending,setIspending]=useState(false);
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const blog={title,body,author};
        setIspending(true);

        // console.log(blog);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIspending(false);
            history.push('/');
        });
    }
    return (
        <div className="create">
            <h2>Add a blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} />

                <label>Blog body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} />

                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Bhavesh">Bhavesh</option>
                    <option value="Rahul">Rahul</option>
                </select>

                {!Ispending && <button>Add blog</button>}
                {Ispending &&<button disabled>Adding blog...</button>}

{/* 
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}

            </form>
        </div>
    );
}

export default Create;