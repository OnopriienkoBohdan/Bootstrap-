import { Row, Col, Card, Button, Container } from "react-bootstrap";
import ocean1 from "../img/ocean.jpg";
import ocean2 from "../img/ocean2.jpg";
import ocean3 from "../img/ocean3.jpg";

export function RowList() {
  return (
    <Container>
      <Row style={{ paddingTop: "", paddingBottom: "2rem" }}>
        <Col>
          <Card className="mt-3 ms-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ocean1} />
            <Card.Body>
              <Card.Title>WebDev Blog</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis, velit!
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3 ms-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ocean2} />
            <Card.Body>
              <Card.Title>WebDev Blog</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis, velit!
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3 ms-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ocean3} />
            <Card.Body>
              <Card.Title>WebDev Blog</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis, velit!
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
