import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const Loader = () => {
  return (
    <Container>
      <div className="text-center">
        <Spinner animation="border" variant="info" />
      </div>
    </Container>
  );
};

export default Loader;
