import { useState } from "react"
import { SerieInterface } from "../../interfaces/Serie";

const ListRender = () => {
    const [series, setSeries] = useState([
        { id: 0, nome: "Breaking Bad" },
        { id: 1, nome: "Better Call Saul" },
        { id: 2, nome: "El Camino" },
        { id: 3, nome: "Peaky Blinders" }
    ]);

    const deleteRandomSerie = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setSeries((prevSerie: Array<SerieInterface>) => {
            return prevSerie.filter((serie: SerieInterface) => randomNumber !== serie.id);
        });
    }

  return (
    <div>
        <ul>
            {
                series.map((serie: SerieInterface) => (
                    <li key={serie.id}>{serie.nome}</li>
                ))
            }
        </ul>
        <button onClick={deleteRandomSerie}>Deletar</button>
    </div>
  )
}

export default ListRender