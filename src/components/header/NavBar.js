import '../../styles/header.css'
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <nav>

            <div className="NavBar">
                <h1>Bhavesh Blog's</h1>
                <div className="nav" >
                    <Link to="/" className="links" >Home</Link>
                    <Link to="/Create" className="links" style={{ backgroundColor: 'red' , color: 'white',borderRadius:'30%' }}>New Blog</Link>
                </div>

            </div>
        </nav>
    );
}

export default Home;