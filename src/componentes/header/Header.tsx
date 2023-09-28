import './Header.css'
import LinkNav from '../linknav/LinkNav'
import imagem from ".././../assets/barbie.png"

export function Header(){
  return(
    <header>
      <div>
        <img className='Logo' src={imagem} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <LinkNav url="/" texto='Home'/>
          </li>
          <li>
            <LinkNav url="/noticias" texto='Noticias'/>
          </li>
          <li>
            <LinkNav url="/sobre" texto='Sobre'/>
          </li>
          <li className='ultimo'>
            <LinkNav url="/contato" texto='Contato'/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header