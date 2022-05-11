import React from "react";

export const Noticia = () => {
  let noticia = {
    titulo:
      "Mi piloto está incoherente y no tengo ni idea de cómo manejar un avión”: la hazaña de un pasajero que logró aterrizar y salvarle la vida al resto",
    descripcion:
      "Un inexperimentado viajero a bordo se contactó con la torre de control del aeropuerto internacional de Palm Beach y recibió instrucciones para llevar a tierra a la aeronave",
  };
  let { titulo, descripcion } = noticia;

  return (
    <div
      style={{
        margin: "1.3rem",
        padding: "2rem",
        border: "2px solid black",
        backgroundColor: "white",
      }}
    >
      <h1>{titulo}</h1>
      <h2 style={{ textAlign: "left" }}>{descripcion}</h2>
    </div>
  );
};
