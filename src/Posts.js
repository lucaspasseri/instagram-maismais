import Post from './Post';

export default function Posts(){
    return(
    <div class="posts">
        <Post nome ="meowed" imagem="assets/img/gato-telefone.svg" quemCurtiu="respondeai"/>
        <Post nome ="barked" imagem="assets/img/dog.svg" quemCurtiu="adorable_animals"/>
    </div>
    );
}