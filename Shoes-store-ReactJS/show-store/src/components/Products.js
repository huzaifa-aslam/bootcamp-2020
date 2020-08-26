import React from "react";
import { Container, Row, Col,Card,Button } from "react-bootstrap";
import shoes from './db'

function Products() {
  console.log("shoes",shoes)

  return (
    <Container >
      <Row>
        <Col>
          <h1>Products</h1>
          {shoes.map((keyName,ind)=>{
            const myshoes=shoes[keyName]
            console.log(myshoes)
            return (

              <Card key={ind} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={myshoes.img} />
              <Card.Body>
                <Card.Title>{myshoes.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            )
          })}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
