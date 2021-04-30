export default function Usuario(props){
    const url ="assets/img/"+props.nome+".svg";
    return(
        <div class="usuario">
            <img src={url} />
            <div class="texto">
                <strong>{props.nome}</strong>
                {props.nick}
            </div>
        </div>
    );
}