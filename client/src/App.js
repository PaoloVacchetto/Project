// npm run build && rm -r ../server/src/main/resources/static && mkdir ../server/src/main/resources/static/ && cp -a ./build/. ../server/src/main/resources/static
import './App.css';
import './css/custom.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';
import MyNavbar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <MyNavbar />
        <Container fluid>
          <Row className='vheight-100'>
            <Routes>
              <Route path='/' />
            </Routes>
          </Row>
        </Container>
      </>
  );
}

export default App;