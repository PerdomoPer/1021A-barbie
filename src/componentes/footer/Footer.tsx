import './Footer.css'
import LinkNav from '../linknav/LinkNav'
import imagem from ".././../assets/barbiefooter.png"
import imagem1 from ".././../assets/instagram_icon_logo.png"
import imagem2 from ".././../assets/facebook.png"
import imagem3 from ".././../assets/th.png"

export function Footer(){
    return(
      <footer>
        <div>
          <img className='LogoFooter' src={imagem} alt="" />
            <div className='redes'>
              <img className='rede' src={imagem1} alt="" />
              <img className='rede' src={imagem2} alt="" />
              <img className='rede' src={imagem3} alt="" />
            </div>
        </div>
        <nav>
          <ul>
                <li> <h1>Produtos</h1>
              <LinkNav url="/bonecas" texto='Bonecas'/>
              <LinkNav url="/roupas" texto='Roupas'/>
              <LinkNav url="/acessorios" texto='Acessórios'/>
              <LinkNav url="/casasdebonecas" texto='Casas de Bonecas'/>
                </li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li> <h1>Filmes</h1>
              <LinkNav url="/golfinhos" texto='Barbie e os Golfinhos Mágicos'/>
              <LinkNav url="/videogame" texto='Barbie em Um Mundo de Vídeo Game'/>
              <LinkNav url="/cisnes" texto='Barbie Lago dos Cisnes'/>
              <LinkNav url="/sereia" texto='Barbie em Vida de Sereia'/>
                </li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li> <h1>Contato</h1>
              <LinkNav url="/contato" texto='Contato'/>
              <LinkNav url="/recall" texto='Recall de Podutos e Segurança'/>
              <LinkNav url="/feedback" texto='Feedback'/>
              <LinkNav url="/emprego" texto='Oportunidades de Emprego'/>
                </li>
            </ul>
        </nav>
        <nav>
            <ul> <h1>Termos e Condições</h1>
                <li>
              <LinkNav url="/privacidade" texto='Declaração de Privacidade'/>
              <LinkNav url="/tecnologia" texto='Cookies e Tecnologia'/>
              <LinkNav url="/acessibilidade" texto='Declaração de Acessibilidade'/>
              <LinkNav url="/preferences" texto='Cookie Preferences'/>
              <h6>©2023 Barbie</h6>
                </li>
            </ul>
        </nav>
      </footer>
    )
  }

export default Footer