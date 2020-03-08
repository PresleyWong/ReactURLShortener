import React, { Component } from "react";
import API from "./components/api";
import InputForm from "./components/inputForm";
import LinkTable from "./components/linkTable";
import Notification from "./components/notification";
import Loader from "./components/loader";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
      showModal: false,
      showLoader: false,
      message: ""
    };
  }

  renderModal = msg => {
    return <Notification message={msg} onClose={this.handleShowModal} />;
  };

  renderLoader = () => {
    return <Loader />;
  };

  handleShowModal = showModal => {
    this.setState({ showModal });
  };

  getLinks = async () => {
    this.setState({ showLoader: true });
    let res = await API.get("/links", {
      params: {
        orderBy: "createdAt",
        orderDir: "desc",
        limit: "25"
      }
    });
    let links = res.data;
    this.setState({ links });
    this.setState({ showLoader: false });
  };

  createLink = async url => {
    await API.post("/links/", { destination: url })
      .then(res => this.getLinks())
      .catch(error => {
        this.setState({ message: error.response.data.message });
        this.handleShowModal(true);
      });
  };

  deleteLink = async id => {
    await API.delete(`/links/${id}`)
      .then(res => this.getLinks())
      .catch(error => {
        this.setState({ message: error.response.data.message });
        this.handleShowModal(true);
      });
  };

  componentDidMount() {
    this.getLinks();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showModal && this.renderModal(this.state.message)}
        <InputForm onShorten={this.createLink} />
        <LinkTable links={this.state.links} onDelete={this.deleteLink} />
        {this.state.showLoader && this.renderLoader()}
      </React.Fragment>
    );
  }
}
