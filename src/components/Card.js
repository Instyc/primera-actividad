import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

export const Card = ({ img, title, description }) => {
  const Card = styled.div`
    width: 300px;
    height: 350px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5%;
    overflow: hidden;
  `;
  const CardImg = styled.div`
    height: 35%;
    background-color: black;
  `;
  const CardData = styled.div`
    padding: 4px;
    height: 50%;
  `;
  const ReadMore = styled(Button)`
    margin: 5px;
    height: 15%;
    padding: 0px;
  `;

  return (
    <Card>
      <CardImg>
        <img src={img} alt={title} style={{ height: "100%" }} />
      </CardImg>
      <CardData>
        <h1 style={{ margin: "1px" }}>{title}</h1>
        <sub>{description}</sub>
      </CardData>
      <ReadMore>Leer Más</ReadMore>
    </Card>
  );
};
