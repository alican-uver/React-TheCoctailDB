import React from "react";
import styled from "styled-components";
import Company from "../components/Company";

const About = () => {
  return (
    <AboutWrapper>
      <h1 className="section-title">About Us</h1>
      <h2 className="section-companies">Companies we work for</h2>
      {/* Company Carousel */}
      <Company />
      <p className="section-content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
        necessitatibus quia placeat dolorum natus nulla reiciendis dolores
        exercitationem voluptatibus quisquam quidem itaque fuga, a quod, facere
        cum! Voluptas vero qui at, velit officiis consectetur debitis alias, non
        fugiat sequi ducimus culpa est laborum tempora eos nostrum dolor earum
        quaerat temporibus quam. Rerum mollitia fuga nesciunt blanditiis, odit
        non corporis autem laudantium aperiam corrupti similique velit voluptas
        sequi laboriosam esse distinctio.
      </p>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  .section-title {
    text-align: center;
    font-size: 4rem;
    margin: 0;
  }
  .section-companies {
    color: #021529;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    font-size: 2.5rem;
  }
  .section-content {
    font-weight: 700;
    color: gray;
    margin-top: 30px;
  }
`;
