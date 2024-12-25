import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grid from './components/Grid/Grid';
import Instructions from './Instructions/Instructions';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Grid numberOfCards={9}/>}/>
        <Route path='/instructions' element={<Instructions/>}/>
      </Routes>
    </>
  )
}

export default App;
