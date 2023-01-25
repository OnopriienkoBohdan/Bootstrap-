import React from "react";
import { Container, Table } from "react-bootstrap";

export const Users = () => {
  return (
    <Container className="mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>Mark</th>
            <th>Otto</th>
            <th>@mo</th>
          </tr>
          <tr>
            <th>2</th>
            <th>Jacob</th>
            <th>Thornton</th>
            <th>@fat</th>
          </tr>
          <tr>
            <th>3</th>
            <th colSpan={2}>Larry the Bird</th>
            <th>@twitter</th>
          </tr>
          <tr>
            <th>1</th>
            <th>Mark</th>
            <th>Otto</th>
            <th>@mo</th>
          </tr>
          <tr>
            <th>2</th>
            <th>Jacob</th>
            <th>Thornton</th>
            <th>@fat</th>
          </tr>
          <tr>
            <th>3</th>
            <th colSpan={2}>Larry the Bird</th>
            <th>@twitter</th>
          </tr>
          <tr>
            <th>1</th>
            <th>Mark</th>
            <th>Otto</th>
            <th>@mo</th>
          </tr>
          <tr>
            <th>2</th>
            <th>Jacob</th>
            <th>Thornton</th>
            <th>@fat</th>
          </tr>
          <tr>
            <th>3</th>
            <th colSpan={2}>Larry the Bird</th>
            <th>@twitter</th>
          </tr>
          <tr>
            <th>1</th>
            <th>Mark</th>
            <th>Otto</th>
            <th>@mo</th>
          </tr>
          <tr>
            <th>2</th>
            <th>Jacob</th>
            <th>Thornton</th>
            <th>@fat</th>
          </tr>
          <tr>
            <th>3</th>
            <th colSpan={2}>Larry the Bird</th>
            <th>@twitter</th>
          </tr>
          <tr>
            <th>1</th>
            <th>Mark</th>
            <th>Otto</th>
            <th>@mo</th>
          </tr>
          <tr>
            <th>2</th>
            <th>Jacob</th>
            <th>Thornton</th>
            <th>@fat</th>
          </tr>
          <tr>
            <th>3</th>
            <th colSpan={2}>Larry the Bird</th>
            <th>@twitter</th>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
