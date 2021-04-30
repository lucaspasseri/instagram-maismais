import Sugestao from './Sugestao';
import Usuario from './Usuario';

export default function Sidebar(){
    const dados =  {nome:"catanacomics",
                    nick:"Catana",
                sugestoes: ["bad.vibes.memes",
                            "chibirdart",
                            "razoesparaacreditar",
                            "adorable_animals",
                            "smallcutecats"
            ]
    };
    const sugestoesComponentizadas = (dados.sugestoes).map(item => <Sugestao nome={item}/>);

    return(
        <div class="sidebar">
            
            <Usuario nome={dados.nome} nick={dados.nick}/>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                
                {sugestoesComponentizadas}
                
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