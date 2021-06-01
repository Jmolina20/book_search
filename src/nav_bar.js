import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import contact_info from "./contact";

function Nav() {
    const nav_bar = <Router><nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="./contact">Contact</Link></li>
          
        </ul>
    </nav>
    
    <Route path="/contact" component={contact_info}/>

    </Router>
    return (nav_bar)
}

export default Nav;