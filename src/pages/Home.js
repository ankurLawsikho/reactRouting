
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    return (
        <>
            <h1>My Home Page</h1>
            <p>Go to <Link to="/products">Product Page</Link></p>
            <button onClick={() => {navigate('products')}}>Navigate</button>
        </>
    );
}

export default HomePage;