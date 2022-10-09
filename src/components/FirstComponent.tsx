import Fundo1 from "../assets/fundo1.jpg";

const FirstComponent = () => {
    const nomeComponent = "Primeiro Component no React";

    return (
        <div>
            <h1>{nomeComponent}</h1>
            <div>
                <img src={Fundo1} alt="Fundo do Mac" />
            </div>
        </div>
    )
}

export default FirstComponent;