import React from 'react';
import {Card, Button, Container } from "react-bootstrap";

const ImageCard = ({images}) => {
  return (
    <Container>
    <Card style={{width:"18rem", marginTop:"5rem"}}>
        <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1675461588230-732ec738a0f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTgyOTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODMyMTU1NTI&ixlib=rb-4.0.3&q=80&w=400" alt="" />
        <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
                Lorem Ipsum Generator text dummy description
            </Card.Text>
            <Button variant="primary">Delete</Button>
        </Card.Body>
    </Card>
    </Container>
  )
}

export default ImageCard