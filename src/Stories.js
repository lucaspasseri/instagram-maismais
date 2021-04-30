import Story from './Story';

export default function Stories(){
    const dados = [ 
        "9gag","meowed","barked","nathanwpylestrangeplanet",
        "wawawicomics","respondeai","filomoderna", "memeriagourmet"
    ];
    
    const dadosComponentizados = dados.map(item => <Story titulo={item}/>);
    return(
        <div class="stories">
            
            {dadosComponentizados}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}