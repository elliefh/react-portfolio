import Container from 'react-bootstrap/Container';
import "./style.css";

function MyHeader() {
    return(
        <div className="Header d-flex">
            <Container className="align-self-center">
                <h1 className="text-center">Ellie Fu-Hinthorn</h1>
            </Container>
        </div>
    )
}

export default MyHeader;