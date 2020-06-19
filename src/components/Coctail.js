import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const Coctail = props => {
  const { name, image, info, id, glass } = props;

  return (
    <Card hoverable cover={<img src={image} alt="coctail" />}>
      <Card.Meta
        title={name}
        description={glass}
        style={{ marginBottom: "10px" }}
      />
      <small>{info}</small>
      <br />
      <Link to={`/cocktail/${id}`}>More Details</Link>
    </Card>
  );
};

export default Coctail;
