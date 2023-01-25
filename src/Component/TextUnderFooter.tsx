import { Container, Row, Col } from "react-bootstrap";
import ocean5 from "../img/ocean5.jpg";

export function TextUnderFooter() {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={7}>
          <img src={ocean5} className="d-block w-100" />
        </Col>
        <Col md={5} className="text-white bg-dark bg-opacity-50 mt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            aperiam quas architecto tenetur nesciunt eius aliquid! Reiciendis
            veritatidolorum consequatur natus doloremque illum, soluta ea ullam
            molestias in molestiae porro mollitia minima et. Maiores veritatis
            blanditiis alias adipisci aspernatur ea, omnis, dicta dignissimos
            iure tempora et?
          </p>
        </Col>
      </Row>
    </Container>
  );
}
