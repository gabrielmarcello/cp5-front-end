const Servicos = () =>{
    return (
        <>
            <div className="pagina-servicos">
                <div className="servico">
                    <h1 className="titulo-servico">banho</h1>
                    <img className="imagem-servico" src="./img/gato-tomando-banho.jpg" alt="gato tomando banho" />
                </div>
                <div className="servico">
                    <h1 className="titulo-servico">tosa</h1>
                    <img className="imagem-servico" src="./img/tosa-higienica.jpg" alt="cachorro na tosagem" />
                </div>
                <div className="servico">
                    <h1 className="titulo-servico">consultas veterinárias</h1>
                    <img className="imagem-servico" src="./img/porcodaindia.png" alt="porco da india na consulta médica" />
                </div>
            </div>
        </>
    )
}
export default Servicos;