import {Nav,Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navigation({menuItems}){
    let menuContent = [];
    if(Array.isArray(menuItems)){
        menuContent = menuItems.filter((item)=>item.navItem).map((item,idx)=>{
            return <Nav.Item key={idx}>
                <Link to={item.path} className="nav-link">
                    {item.name}
                </Link>
            </Nav.Item>;
        });
    }
    return(
        <Navbar bg="light" expand="md" className="w-100" collapseOnSelect>
            <Navbar.Brand>
                <Link to="/" className="font-weight-bold font-logo decoration-none text-white">
                    <img src="/img/logo.png" alt="logo" className="me-2"/>
                    
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>                    
                <Nav className="ms-auto text-end px-3">
                    {menuContent}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;