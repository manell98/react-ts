import { useState } from "react"

const ListRender = () => {
    const [listMovies] = useState(["Breaking Bad", "Better Call Saul", "El Camino"]);

  return (
    <div>
        <ul>
            {
                listMovies.map((movie: string, index: number) => (
                    <li key={index}>{movie}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ListRender