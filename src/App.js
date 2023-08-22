import {Route, Routes} from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Stock from './pages/Stock';
import Navbar from './components/Navbar';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/Dash' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Stocks/:symbol' element={<Stock/>}/>
      </Routes>
    </div>
  );
}

export default App;
