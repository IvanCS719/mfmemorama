import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContainerTablero_2P from './components/MemoLogica/MainContainerTablero_2P.jsx';
import MainContainerTablero from './components/MemoLogica/MainContainerTablero.jsx';
import MemoSelectTema from './components/MemoLayouts/MemoSelectTema.jsx';
import MemoSelectNumCards from './components/MemoLayouts/MemoSelectNumCards.jsx';
import MemoMainMenu from './components/MemoLayouts/MemoMainMenu.jsx';


function App() {

 return(
  <Router>
    <Routes>
      <Route path='/' element={<MemoMainMenu></MemoMainMenu>}/>
      <Route path='/memo' element={<MainContainerTablero></MainContainerTablero>}/>
      <Route path='/memodos' element={<MainContainerTablero_2P></MainContainerTablero_2P>}/>
    </Routes>
  </Router>
);

}

export default App
