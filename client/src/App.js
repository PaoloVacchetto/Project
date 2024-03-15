// npm run build && rm -r ../server/src/main/resources/static && mkdir ../server/src/main/resources/static/ && cp -a ./build/. ../server/src/main/resources/static
//import './App.css';
//import './css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';
import CustomerHomePage from "./customer/CustomerHomePage";


function App() {
    return (
        <Router>
            <App2 />
        </Router>
    );
}

function App2() {
    return(
        <>

            <Container fluid>
                <Row className='vheight-100'>
                    <Routes>
                        <Route path='/' element={<CustomerHomePage />} />
                        <Route path='new-purchase' element={<NewPurchaseForm  />} />
                    </Routes>
                </Row>
            </Container>
        </>
    );
}

export default App;