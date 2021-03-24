
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css';

function MyProject(props) {
    return(
       <Row className="highlighted-project">
                <Col>
                    <Card style={{ width: '100%'}}>
                    <Card.Img variant="top" src={props.image} className="project-screenshot"/>
                    <Card.Body>
                    <Card.Title className="text-center">{props.name}</Card.Title>
                    <Card.Text className="text-center">
                        {props.description} <br/> Programming langugages: {props.languages}
                    </Card.Text>
                    <Row className="justify-content-center">
                    <Card.Link href={props.repoLink}>Repository</Card.Link>
                    <Card.Link href={props.liveLink}>Live Application</Card.Link>
                    </Row>
                    </Card.Body>
                    </Card>
                </Col>
        </Row>
    )
}

export default MyProject;