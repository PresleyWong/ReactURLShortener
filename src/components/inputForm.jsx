import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = { url: "" };
  }

  handleChange() {
    const url = this.textInput.current.value;
    this.setState({ url });
  }

  handleClick(url) {
    if (this.checkHypertextTransferProtocol(url) !== true)
      url = `https://${url}`;

    this.props.onShorten(url);
    this.textInput.current.value = "";
  }

  checkHypertextTransferProtocol(str) {
    const pattern = new RegExp("^https?:\\/\\/");
    return !!pattern.test(str);
  }

  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>URL Shortener</h1>
          <InputGroup className="mb-3" id="url-input">
            <FormControl
              ref={this.textInput}
              onChange={() => this.handleChange()}
              placeholder="Shorten your link"
              aria-label="Shorten your link"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={event => this.handleClick(this.state.url)}
              >
                Shorten!
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
      </Jumbotron>
    );
  }
}

export default InputForm;
