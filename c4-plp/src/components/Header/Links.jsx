import "./Header.css"
import { Link } from "react-router-dom"

export default function Links() {

    return (
            <div>
                <ul className="nav_links">
                    <li className="link"><Link to="/Catalog/Bags" className="light" >Bags</Link></li>
                    <li className="link"><Link to="/Catalog/Shoes" className="light" >Shoes</Link></li>
                    <li className="link"><Link to="/Catalog/Denim" className="light" >Denim</Link></li>
                    <li className="link"><Link to="/Catalog/Jewelry" className="light" >Jewelry</Link></li>
                </ul >
            </div>
    )
}