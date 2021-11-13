import BlogList from './Blogs_list';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs,Ispending,error}=useFetch(' http://localhost:8000/blogs ');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {Ispending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

// for the server npx json-server --watch data/db.json --port 8000

export default Home;