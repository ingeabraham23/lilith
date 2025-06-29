import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tiempos from "./components/Tiempos";
import Datos from "./components/Datos";
import TablaReporte from "./components/Reporte";
import Comision from "./components/Comision";
import AcercaDe from "./components/AcercaDe";

function App() {
  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Tiempos />} />
            <Route path="/datos" element={<Datos />} />
            <Route path="/reporte" element={<TablaReporte />} />
            <Route path="/comision" element={<Comision />} />
            <Route path="/acerca" element={<AcercaDe />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;
