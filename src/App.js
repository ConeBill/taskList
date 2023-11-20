import { useState } from 'react';
import './App.css';
import Main from './components/Main.js';

export default function App() {
  const [vari, setVari] = useState(29);
  let valorNovo = vari

  function troca() {
    valorNovo = setVari(vari + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Word {valorNovo}
        </p>
        <Main />
        <button onClick={troca}>atualiza</button>
      </header>
    </div>
  );
}
