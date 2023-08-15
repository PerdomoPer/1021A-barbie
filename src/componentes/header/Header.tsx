import './Header.css'
import Link from './../link/Link'

export function Header(){
  return(
    <header>
      <div>
        <img className='Logo' src="src/componentes/barbie.png" alt="" />
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