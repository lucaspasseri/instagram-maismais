export default function Sugestao(props){
    const url = "assets/img/"+props.nome+".svg";
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={url} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}