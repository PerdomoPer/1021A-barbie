import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main() {

    const [texto,setTexto]=useState("")

    const filmes:FilmeType[] = [
        {
            id:1,
            titulo:'Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/filme.png'
        },
        {
            id:2,
            titulo:'Barbie Aventura de Cavalos',
            sinopse:'Barbie treina um cavalo selvagem com suas irmãs durante suas férias nos Alpes.',
            imagem:'/filme1.jpg'
        },
        {
            id:3,
            titulo:'Barbie em Vida de Sereia ',
            sinopse:'Merliah vai à Austrália participar de um torneio de surfe e evitar que Eris se apodere de Oceana.',
            imagem:'/filme2.jpg'
        },
        {
            id:4,
            titulo:'Barbie e as Agentes Secretas',
            sinopse:"Barbie e suas melhores amigas Teresa e Renee se transformam em agentes secretas em uma aventura cheia de ação. ",
            imagem:'/filme3.jpg'
        },
        {
            id:5,
            titulo:'Barbie e o Segredo das Fadas',
            sinopse:"Mundos mágicos, fadas e cavalos voadores são alguns dos elementos encontrados neste filme da Barbie. ",
            imagem:'/filme4.jpg'
        },
        {
            id:6,
            titulo:'Barbie - A Princesa & a Pop Star',
            sinopse:"Keira é uma estrela pop mundialmente conhecida. Tori é a princesa de Meribella e fã de Keira. ",
            imagem:'/filme5.jpg'
        },
        {
            id:7,
            titulo:'Barbie: a Fashion Fairytale',
            sinopse:"Em um conto de fadas fashion, Barbie viaja a Paris para salvar o ateliê de moda da sua tia, que está prestes a ser fechado.",
            imagem:'/filme6.jpg'
        },
        {
            id:8,
            titulo:'Barbie: Aventura nas Estrelas',
            sinopse:"A vida despreocupada que Barbie leva em seu planeta, ao lado do bicho de estimação Pipoca, fica ameaçada quando a boneca descobre que o brilho da galáxia está desaparecendo.",
            imagem:'/filme7.jpg'
        },
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return(
        <>
        <div>
            <input className='pesquisa' 
            type="text" 
            placeholder='O que você está procurando?'
            onChange={TrataTexto} />
            {texto && <p className='pesquisa1'>Resultados Para: {texto} </p>}
                
        </div>
        <main className="content-main">
        {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                sinopse={filme.sinopse}
                                titulo={filme.titulo}
                                imagem={filme.imagem}
                            />
                    )
                }
        </main>
        </>
    )
}