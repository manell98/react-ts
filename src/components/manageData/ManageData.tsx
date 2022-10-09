import { useState } from "react";

const ManageData = () => {
    const valor = 10;

    const [number, setNumber] = useState(valor);

  return (
    <div>
        <div>
            <p>Valor: {number}</p>
        </div>
        <button onClick={() => setNumber(20)}>Mudar Valor</button>
    </div>
  )
}

export default ManageData