import { useState } from 'react'
import './App.css'
import { MdContentPasteSearch } from "react-icons/md";
import api from './services/api'

//2520-193

function App() {
  const [input, setInput] = useState('')
  const [cp, setCp] = useState([])


  async function handleSearch() {
    if (input === '') {
      alert("Não pode estar vazio!");
      return;
    }

    try {
      const response = await api.get(`${input}`)
      console.log(response);

      if (response.data.length > 0) {
        setCp(response.data);
      }

      console.log(cp.data);

    } catch {
      console.log("erro crlh")
      alert("Erro!");
      setInput("");
    }
  }

  return (
    <>
      <div className='container'>
        <h1 className='title'>Pesquisar Codigo-Postal</h1>

        <div className='containerInput'>
          <input type='text' placeholder='Escreve o teu CP (Ex. 0000-000)' value={input} onChange={(event) => setInput(event.target.value)}>

          </input>

          <button className='buttonSearch' onClick={handleSearch}>
            <MdContentPasteSearch />
          </button>
        </div>

        {cp.length > 0 &&
          <h2> Codigo Postal: {input}</h2>
        }

        {cp.map((cps, index) =>

          <main className='main' key={index}>
            <span className={`result result-${index + 1}`}>Resultado {index + 1}</span>

            <span> Morada: <text className='address'>{cps.morada}</text></span>
            <span> Localidade: <text className='address'>{cps.localidade}</text></span>
            <span> Freguesia: <text className='address'>{cps.freguesia}</text></span>
            <span> Concelho: <text className='address'>{cps.concelho}</text></span>
            <span> Distrito: <text className='address'>{cps.distrito}</text></span>
          </main>
        )}


      </div>
    </>
  )
}

export default App
