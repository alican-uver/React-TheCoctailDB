import React from "react";
import { Card } from "antd";

const Coctail = (props) => {
  const { name, image, info, glass } = props;

  return (
    <Card hoverable cover={<img src={image} alt="coctail" />}>
      <Card.Meta title={name} description={glass} />
    </Card>
  );
};

export default Coctail;
