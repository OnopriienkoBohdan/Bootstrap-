import { Modal, Form, Button } from "react-bootstrap";

interface IContent {
  show: boolean;
  hide: () => void;
}

export function Formyla({ show, hide }: IContent) {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Log in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="Enter emaile" />
            <Form.Text>We'll never share your email with password</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary">Log in</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
