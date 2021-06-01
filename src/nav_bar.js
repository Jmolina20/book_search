import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import bookstore from "./contact";

function Nav() {
    const nav_bar = <Router><nav id="nav">
        
          <Link to="/">Home</Link>
          <Link to="./contact">Alternative bookstores</Link>
          
        
    </nav>
    
    <Route path="/contact" component={bookstore}/>

    </Router>
    return (nav_bar)
}

export default Nav;