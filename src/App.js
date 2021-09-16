import "./App.css";
import styled from "@emotion/styled";
import React, {useState} from "react";
import Frase from "./components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  color: #fff;
  padding: 1rem 3rem;
  border: 2px solid black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  transition: background-size 0.8s ease;
  margin-top: 2rem;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  const [frase, guardarFrases] = useState({})

  const consultarApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    guardarFrases(frase[0]);
  };

  return (
    <>
      <Contenedor>
        <Frase 
          frase={frase}
        />
        <Boton onClick={consultarApi}>Obtener Frase</Boton>
      </Contenedor>
    </>
  );
}

export default App;