
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import { ItemListContainer } from './Components/ItemListcontainer/ItemListcontainer';

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <section>
      <ItemListContainer greetings = " Bienvenidos a la mejor pagina de tecnologia!"/><subtitle>Pueden visitarnos en nuestra pagina de instagram</subtitle>
      </section>
    </>  
  )
}


export default App
