import styled from "@emotion/styled";
import React from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { dataCard } from "../data/cards";

export const HomePage = () => {
  const CardContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 1rem;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  `;
  return (
    <div>
      <Header />
      <CardContainer>
        {dataCard.map(({ title, img, description }, i) => (
          <Card key={i} title={title} img={img} description={description} />
        ))}
      </CardContainer>
    </div>
  );
};
