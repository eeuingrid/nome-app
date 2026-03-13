import React from 'react'

export default function Saudacao(props) {
  return (
    <div>
         {
         props.logado 
         ? <p>Você está logado</p> 
         : <p>Você não está logado</p>
         }
        </div>
  )
}
