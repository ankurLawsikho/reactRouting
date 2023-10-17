import { Link } from 'react-router-dom';

function ProductsPage() {
    return (
        <>  
            <h1>My Products Page</h1>
            <ul>
                <li>
                    <Link to="p1">Product 1</Link>
                </li>
                <li>
                    <Link to="p2">Product 2</Link>
                </li>
            </ul>
        
        </>      
    );
}

export default ProductsPage;