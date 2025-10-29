
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidxs a La Bodega - Vinoteca Online"}/>}/>
          <Route path="/category/:category" element={ <ItemListContainer greeting={"Bienvenidxs a La Bodega - Vinoteca Online"}/> }/>
          <Route path="/detail/:id" element={ <ItemDetailContainer/> }/>
        </Routes>

        
      </BrowserRouter>
    </div>
  )
}

export default App
