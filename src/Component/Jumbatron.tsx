import { Container, Card } from "react-bootstrap";
import ocean4 from "../img/ocean4.jpg";

export function Jumbotron() {
  return (
    <Card className="bg-dark text-dark ">
      <Card.Img
        className="d-block w-100"
        src={ocean4}
        alt="Card image"
        style={{ height: "" }}
      />
      <Card.ImgOverlay>
        <Card.Title className="text-white bg-dark bg-opacity-50 ">
          Card title
        </Card.Title>
        <Card.Text className="text-white bg-dark bg-opacity-50">
          This isperspiciatis assumenda rerum sequi praesentium dicta alias quae
          delectus! Eveniet quidem quia rerum voluptatem id ratione inventore
          aliquid soluta deleniti accusantium earum quis errodi velit porro?
          Illum.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
