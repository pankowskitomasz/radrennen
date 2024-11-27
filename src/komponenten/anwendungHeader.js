import {Container,Row } from "react-bootstrap";
import Navigation from "./navigation";

function AnwendungHeader(){
    return(
        <header>
            <Container fluid>
                <Row>
                    <Navigation menuItems={[{navItem:true, exact:true, path:"/",name:"Home",view:<homeAnsicht/>}]}/>
                </Row>
            </Container>
        </header>
        
    );
}

export default AnwendungHeader;