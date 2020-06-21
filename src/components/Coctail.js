import React from "react";
import { Card, Button } from "antd";
import { Link } from 'react-router-dom';
import { InfoCircleOutlined } from '@ant-design/icons';

const Coctail = (props) => {
  const { name, image, info, id, glass } = props;

  return (
    <Card hoverable cover={<img src={image} alt="coctail" />}>
      <Card.Meta title={name} description={glass} style={{ marginBottom: '10px' }} />
      <small>{info}</small><br />
      <Link to={`/cocktail/${id}`}> <Button type="primary" icon={<InfoCircleOutlined />}>More Info</Button></Link>
    </Card>
  );
};

export default Coctail;
