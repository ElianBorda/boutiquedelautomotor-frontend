import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import TurnosDeTrabajoComponent from './components/TurnosDeTrabajoComponent';
import Navelem from './components/Navelem';
import ServiciosSolicitados from './components/ServiciosSolicitados';


function App() {
  return (
    <BrowserRouter>

      <Navelem />
      <Routes>
        <Route path="/" element={<TurnosDeTrabajoComponent />}/>
        <Route path="/turnos" element={<TurnosDeTrabajoComponent />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
