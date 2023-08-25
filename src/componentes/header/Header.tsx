import './Header.css'
import Link from './../link/Link'
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
            <Link texto='Home'/>
          </li>
          <li>
            <Link texto='Noticias'/>
          </li>
          <li>
            <Link texto='Sobre'/>
          </li>
          <li className='ultimo'>
            <Link texto='Contato'/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header