import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function MyNavbar () {
    const navigate = useNavigate();
    return (
        <Navbar fixed="top" bg="primary" variant={"dark"}>
            <Container fluid>
                <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate('/')} >Ticketing</Navbar.Brand>
                <Nav>

                </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;