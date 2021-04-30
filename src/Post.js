export default function Post(props){
    const url = "assets/img/"+props.nome+".svg";
    const urlCurtida = "assets/img/"+props.quemCurtiu+".svg";
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={url} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imagem} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={urlCurtida} />
                    <div class="texto">
                        Curtido por <strong>{props.quemCurtiu}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}