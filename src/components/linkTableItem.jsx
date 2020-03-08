import React from "react";
import Button from "react-bootstrap/Button";

const LinkTableItem = props => {
  const index = props.index;
  const shortUrl = props.link.shortUrl;
  const longUrl = props.link.destination;
  const id = props.link.id;
  const handleDelete = (event, urlId) => {
    props.onDelete(urlId);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{longUrl}</td>
      <td>
        <a
          href={`https://${shortUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.link.shortUrl}
        </a>
      </td>
      <td>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={event => handleDelete(event, id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default LinkTableItem;
