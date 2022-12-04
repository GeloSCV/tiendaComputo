import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Ranking from './pages/Ranking'
import Reviews from './pages/Reviews'
import Support from './pages/support'
import NavbarComponent from './components/Navbar'
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import Carrito from './pages/carrito';
import Details from './pages/Details/Details';
import SumitTicket from './pages/sumitTicket'
import './App.css'

function App() {
  

  return (
    <ContextProvider>
    <ContextFilter>
    <div className="App"> 
          <BrowserRouter>
                <NavbarComponent/>
                      <Routes>
                        
                      
                          <Route path="/" exact element={<Home/>}/>
                          <Route path="/about" exact element={<About/>} />
                          <Route path="/ranking" exact element={<Ranking/>} />
                          <Route path="/reviews" exact element={<Reviews/>} />
                          <Route path="/support" exact element={<Support/>} />
                          <Route path= "/:id" exact element={<Details/>} />
                          <Route path= "/ticketsumit" exact element={<SumitTicket/>} />
                          
                          <Route path="/shoppingcar" exact element={<Carrito/>} />
                          <Route path="*" exact element={<Home/>} />
                        
                      </Routes>
            </BrowserRouter>
      
    
    </div>
    </ContextFilter>
    </ContextProvider>
  )
}

export default App
