import Post from './Post';

export default function Posts(){
    const dados = [
        {nome :"meowed", imagem:"assets/img/gato-telefone.svg", quemCurtiu:"respondeai"},
        {nome :"barked", imagem:"assets/img/dog.svg", quemCurtiu:"adorable_animals"}
    ];

    const dadosComponentizados = dados.map(
        item => <Post nome={item.nome} imagem={item.imagem} quemCurtiu={item.quemCurtiu} />
    );
    return(
    <div class="posts">
        
        {dadosComponentizados}

    </div>
    );
}