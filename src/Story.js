export default function Story(props){
    const url = "assets/img/"+props.titulo+".svg";
    return(
        <div class="story">
            <div class="imagem">
                <img src={url} />
            </div>
            <div class="usuario">
                {props.titulo}
            </div>
        </div>
    );
}