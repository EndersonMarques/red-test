import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import RED from "./components/redComponent";

function App() {
  let [listaCatalagos, setlistaCatalagos] = useState([]);

  async function getDados() {
    await axios
      .get("https://api.portalmec.c3sl.ufpr.br/v1/learning_objects")
      .then((resposta) => {
        setlistaCatalagos(resposta.data);
        console.log(resposta.data);
      });
  }

  useEffect(() => {
    getDados();
  }, []);

  return (
    <>
      <h1> Catalago </h1>

      <div
        style={{
          margin: "auto",
          display: "flex",
          width: "90%",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {listaCatalagos.map((red, key) => {
          return <RED red={red} key={key} />;
        })}
      </div>
    </>
  );
}

export default App;
