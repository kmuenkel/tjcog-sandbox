import React from 'react'
import Card from "react-bootstrap/card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Cards extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Row>
                        <Col sm={4}>
                            <Card.Img variant="top" src={this.props.image}/>
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text>{this.props.text}</Card.Text>
                            </Card.Body>                        
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    };
};