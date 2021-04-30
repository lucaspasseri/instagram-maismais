import Sugestao from './Sugestao';

export default function Sidebar(){
    return(
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Sugestao nome="bad.vibes.memes"/>
                <Sugestao nome="chibirdart"/>
                <Sugestao nome="razoesparaacreditar"/>
                <Sugestao nome="adorable_animals"/>
                <Sugestao nome="smallcutecats"/>
                
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}