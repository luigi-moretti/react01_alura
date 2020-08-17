import React from 'react';
import ListaDeNotas from "./components/ListaDeNotas"

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="título" />
        <textarea placeholder="Escreva sua nota" />
        <button>Criar Nota</button>
      </form>

      <ListaDeNotas/>
    </section>
  );
}

export default App;
