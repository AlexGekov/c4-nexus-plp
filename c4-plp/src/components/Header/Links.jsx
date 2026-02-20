import "./Header.css"
import { Link } from "react-router-dom"

export default function Links() {

    return (
            <div>
                <ul className="nav_links">
                    <li><Link to="/catalog" className="light" >Catalog</Link></li>
                    <li><Link to="/bags" className="light" >Bags</Link></li>
                    <li><Link to="/shoes" className="light" >Shoes</Link></li>
                    <li><Link to="/denim" className="light" >Denim</Link></li>
                    <li><Link to="/jewellery" className="light" >Jewellery</Link></li>
                </ul >
            </div>
    )
}