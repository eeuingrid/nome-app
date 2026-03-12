import './App.css'

function App() {

  const nome = 'Ingrid'
  const logado = true;
  
  return (
    <>
      <h1>Meu App React</h1>
      <p className='paragrafo'>Utilizando o vite!</p>

      <h3>{`Meu nome é ${nome}`}</h3>
      {logado ? <p>Você está logado</p> : <p>Você não está logado</p>}
    </>
  )
}

export default App
