import Story from './Story';
export default function Stories(){
    return(
        <div class="stories">
            <Story titulo="9gag" imagem="assets/img/9gag.svg"/>
            <Story titulo="meowed" imagem="assets/img/meowed.svg"/>
            <Story titulo="barked" imagem="assets/img/barked.svg"/>
            <Story titulo="nathanwpylestrangeplanet" imagem="assets/img/nathanwpylestrangeplanet.svg"/>
            <Story titulo="wawawicomics" imagem="assets/img/wawawicomics.svg"/>
            <Story titulo="respondeai" imagem="assets/img/respondeai.svg"/>
            <Story titulo="filomoderna" imagem="assets/img/filomoderna.svg"/>
            <Story titulo="memeriagourmet" imagem="assets/img/memeriagourmet.svg"/>

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}