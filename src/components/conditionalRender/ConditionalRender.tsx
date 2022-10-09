import { useState } from "react";

const ConditionalRender = () => {
    const [condicao, setCondicao] = useState(false);

    const mostrarH2 = () => {
        setCondicao((prevCondicao: boolean) => {
            if (prevCondicao) return false;

            return true;
        });
    };

  return (
    <div>
        <h2>{condicao && <p>Isso será exibido ????</p>}</h2>
        <button onClick={mostrarH2}>Mostrar/Ocultar</button>
    </div>
  )
}

export default ConditionalRender;