import { Container } from "react-bootstrap";

export function Footer() {
  return (
    <Container fluid style={{ backgroundColor: "#212529", color: "#fff" }}>
      <Container
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-4 pt-2"
      >
        <p>Web Alfa Toor Company</p>
      </Container>
    </Container>
  );
}
