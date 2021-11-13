import { Link } from "react-router-dom"

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry the page you are looking for does not exist</h2>
            <Link to='/'>Go back to homepage</Link>
        </div>
    );
}
 
export default NotFound;