import { Carousel } from "react-bootstrap";
import ocean1 from "../img/ocean.jpg";
import ocean2 from "../img/ocean2.jpg";
import ocean3 from "../img/ocean3.jpg";

export default function Carusel() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "" }}>
        <img className="d-block w-100 " src={ocean1} alt="First"></img>
        <Carousel.Caption className=" fw-bold text-white bg-dark bg-opacity-50">
          <h3>Our tours</h3>
          <p>You can visit tropical islands.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "" }}>
        <img className="d-block w-100 " src={ocean2} alt="First"></img>
        <Carousel.Caption className=" fw-bold text-white bg-dark bg-opacity-50">
          <h3>Our tours</h3>
          <p>You can visit tropical islands.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "" }}>
        <img className="d-block w-100 " src={ocean3} alt="First"></img>
        <Carousel.Caption className=" fw-bold text-white bg-dark bg-opacity-50">
          <h3>Our tours</h3>
          <p>You can visit tropical islands.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
