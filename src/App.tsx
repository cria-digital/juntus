import Header from "components/main/Header";
import Sidebar from "components/main/Sidebar";
import AuthProvider from "helpers/contexts/AuthContext";
import Atualizações from "pages/Atualizações";
import Login from "pages/Login";
import MinhaConta from "pages/MinhaConta";
import Rede from "pages/MinhaRede";
import Rotas from "pages/MinhasRotas";
import PasswordChange from "pages/PasswordChange";
import PoliticaDeSeguranca from "pages/PoliticaDeSeguranca";
import Profile from "pages/Profile";
import SeloJuntUs from "pages/SeloJuntUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teste from "styles/pages/Teste";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Home from "pages/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <main className="main">
          <Sidebar />
          <div style={{ width: "100%" }}>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="atualizações" element={<Atualizações />} />
              <Route path="minhas-rotas" element={<Rotas />} />
              <Route path="minha-rede" element={<Rede />} />
              <Route path="selo-juntus" element={<SeloJuntUs />} />
              <Route path="minha-conta" element={<MinhaConta />} />
              <Route path="empresa/:id" element={<Profile />} />

              <Route path="politica-de-seguranca" element={<PoliticaDeSeguranca />} />
              <Route path="password-change" element={<PasswordChange />} />
              <Route path="*" element={<Teste />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
