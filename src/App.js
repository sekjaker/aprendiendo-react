import './App.css';

const Mensaje = () => {
  return <h1>Hola mundo </h1>
}
const Componente = () => {
  return <h2>Estamos probando componentes</h2>
}

function App() {
  
  return (
    <div className="App">
     <Mensaje/>
     <Mensaje/>
     <Componente/>
     
    </div>
  );
}

export default App;
