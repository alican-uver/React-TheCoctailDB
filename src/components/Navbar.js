import React from "react";
import { Menu } from "antd";
import logo from "../logo/coctailLogo.png";
import { Link } from 'react-router-dom';
import {HomeOutlined} from '@ant-design/icons';

const Navbar = () => {
  return (
    <Menu mode="horizontal" theme = "dark" style ={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
      <Menu.Item><img src= {logo} alt="cocktail logo" width = "30"/>The Cocktail DB</Menu.Item>
      <Menu.Item><HomeOutlined /><Link to ='/'>Home</Link></Menu.Item>
      <Menu.Item><Link to ='/about'>About</Link></Menu.Item>
    </Menu>
  );
};

export default Navbar;
