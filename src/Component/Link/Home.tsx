import { Container, Row } from "react-bootstrap";
import Carusel from "../Carusel";
import { Jumbotron } from "../Jumbatron";
import { RowList } from "../RowList";
import { TextUnderFooter } from "../TextUnderFooter";

export const Home = () => {
  return (
    <>
      <Carusel />
      <RowList />
      <Jumbotron />
      <TextUnderFooter />
    </>
  );
};
