import React from "react";
import { companies } from "../context/companies/companies";
import { Carousel } from "antd";
import styled from "styled-components";

const Company = () => {
  return (
    <CarouselWrapper>
      <Carousel dotPosition="right">
        {companies.map((company) => {
          return (
            <div key={company.id}>
              <h2 className="company-title">{company.title}</h2>
              <img
                className="company-logo"
                src={company.logo}
                alt="company logo"
              />
              <p className="company-description">{company.description}</p>
            </div>
          );
        })}
      </Carousel>
    </CarouselWrapper>
  );
};

export default Company;

const CarouselWrapper = styled.div`
  .ant-carousel .slick-slide {
    width: 100%;
    height: 500px;
    text-align: center;
    background: #364d79;
    overflow: hidden;
    color: #fff;
    padding: 30px;
    font-size: 16px;
  }

  .company-logo {
    margin: auto;
    display: block;
    width: 300px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 50px;
  }

  .company-title {
    color: #fff;
  }
`;
