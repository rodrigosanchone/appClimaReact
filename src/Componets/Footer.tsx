import React from "react";

export const Footer = () => {
  const fecha = new Date();
  const añoActual = fecha.getFullYear();
  return (
    <div className="row text-center bg-primary">
      <h2>Rodrigo Sancho {añoActual}</h2>
    </div>
  );
};
