import "./Header.css"
import { Link } from "react-router-dom"

export default function Links() {

    return (
            <div>
                <ul className="nav_links">
                    <li><Link to="/Catalog/Bags" className="light" >Bags</Link></li>
                    <li><Link to="/Catalog/Shoes" className="light" >Shoes</Link></li>
                    <li><Link to="/Catalog/Denim" className="light" >Denim</Link></li>
                    <li><Link to="/Catalog/Jewellery" className="light" >Jewellery</Link></li>
                </ul >
            </div>
    )
}