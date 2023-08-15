import './Footer.css'
import Link from './../link/Link'

export function Footer(){
    return(
      <footer>
        <div>
          <img className='LogoFooter' src="src/componentes/barbiefooter.png" alt="" />
            <div className='redes'>
              <img className='rede' src="src/componentes/instagram_icon_logo.png" alt="" />
              <img className='rede' src="src/componentes/facebook.png" alt="" />
              <img className='rede' src="src/componentes/th.png" alt="" />
            </div>
        </div>
        <nav>
          <ul>
                <li> <h1>Produtos</h1>
              <Link texto='Bonecas'/>
              <Link texto='Roupas'/>
              <Link texto='Acessórios'/>
              <Link texto='Casas de Bonecas'/>
                </li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li> <h1>Filmes</h1>
              <Link texto='Barbie e os Golfinhos Mágicos'/>
              <Link texto='Barbie em Um Mundo de Vídeo Game'/>
              <Link texto='Barbie Lago dos Cisnes'/>
              <Link texto='Barbie em Vida de Sereia'/>
                </li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li> <h1>Contato</h1>
              <Link texto='Contato'/>
              <Link texto='Recall de Podutos e Segurança'/>
              <Link texto='Feedback'/>
              <Link texto='Oportunidades de Emprego'/>
                </li>
            </ul>
        </nav>
        <nav>
            <ul> <h1>Termos e Condições</h1>
                <li>
              <Link texto='Declaração de Privacidade'/>
              <Link texto='Cookies e Tecnologia'/>
              <Link texto='Declaração de Acessibilidade'/>
              <Link texto='Cookie Preferences'/>
              <h6>©2023 Barbie</h6>
                </li>
            </ul>
        </nav>
      </footer>
    )
  }

export default Footer