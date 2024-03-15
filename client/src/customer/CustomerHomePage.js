import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Col, Row} from "react-bootstrap";
import './CustomerHomePage.css';
function CustomerHomePage(props) {
    const [tickets, setTickets] = useState([]);
    const [purchase, setPurchase] = useState([]);
    const [loading, setLoading] = useState(true);


    const navigate = useNavigate();


    return (
        <>
            <Row>
                <Col className='section'>
                    <Row><h1>Welcome Home!</h1></Row>
                </Col>
            </Row>

            <Row>
                <Col className='section'>
                    <Row>
                        <Col><h3>Closed Tickets</h3></Col>
                    </Row>

                </Col>
                <Col className='section'>
                    <Row>
                        <Col><h3>Purchases</h3></Col>
                        <Col><Button onClick={() => navigate('new-purchase')}>Insert new Purchase</Button></Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default CustomerHomePage;