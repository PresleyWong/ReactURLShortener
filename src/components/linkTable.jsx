import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import LinkTableItem from "./linkTableItem";

const LinkTable = props => {
  const handleDelete = props.onDelete;
  const tableItems = props.links.map((link, i) => {
    return (
      <LinkTableItem
        key={i}
        link={link}
        index={i + 1}
        onDelete={handleDelete}
      />
    );
  });

  return (
    <Container>
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Long URL</th>
            <th>Short URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tableItems}</tbody>
      </Table>
    </Container>
  );
};

export default LinkTable;
