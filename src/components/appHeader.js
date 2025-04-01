import {Container,Row } from "react-bootstrap";
import Navigation from "./navigation";

function AppHeader(){
    return(
        <header>
            <Container fluid>
                <Row>
                    <Navigation menuItems={[{navItem:true, exact:true, path:"/",name:"Home",view:<homeView/>}]}/>
                </Row>
            </Container>
        </header>
        
    );
}

export default AppHeader;