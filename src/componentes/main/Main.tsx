import React, { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeTypes{
    id:number,
    titulo:string,
    sinopse:string
    imagem:string
}
export default function Main(){ 

    const [texto, setTexto]=useState("")
    
    const filmes:FilmeTypes = [
        {
            titulo:'Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/filme.png'     
        },
        {
            titulo='Filme Barbie',
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
            imagem='/filme1.jpg'/>
        }
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        
    
        setTexto(e.target.value)
    }
    return(
        <>
        <div>
            <input className='pesquisa' type="text" placeholder='O que você está procurando?'onChange={TrataTexto} />
            {
                (!texto)?
                "": <p className='pesquisa1'>Digitado: {texto} </p>
            }
                
        </div>
        <main className="content-main">
            <Filme titulo='Barbie' 
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/filme.png'/>
            <Filme titulo='Filme Barbie' 
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/filme1.jpg'/>
             <Filme titulo='Barbie' 
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/filme2.jpg'/>
             <Filme titulo='Barbie' 
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/filme3.jpg'/>
             <Filme titulo='Barbie' 
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/filme4.jpg'/>
             <Filme titulo='Barbie' 
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/filme5.jpg'/>
             <Filme titulo='Barbie' 
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/filme6.jpg'/>
            <Filme titulo='Barbie' 
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/filme7.jpg'/>
        </main>
        </>
    )
}