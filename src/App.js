import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import TurnosDeTrabajoComponent from './components/TurnosDeTrabajoComponent';
import Navelem from './components/Navelem';
import ServiciosSolicitados from './components/ServiciosSolicitados';
import HistorioalDeServicios from './components/HistorioalDeServicios';


function App() {
  return (
    <BrowserRouter>

      <Navelem />
      <Routes>
        <Route path="/" element={<TurnosDeTrabajoComponent />}/>
        <Route path="/turnos" element={<TurnosDeTrabajoComponent />}/>
        <Route path="/historial" element={<HistorioalDeServicios />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
