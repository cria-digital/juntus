import Header from "components/main/Header";
import Sidebar from "components/main/Sidebar";
import AuthProvider from "helpers/contexts/AuthContext";
import Login from "pages/Auth/Login";
import PasswordChange from "pages/Auth/PasswordChange";
import Register from "pages/Auth/Register";
import BuscarSinergias from "pages/Embarcador/BuscarSinergia";
import MinhaConta from "pages/MinhaConta";
import Rede from "pages/MinhaRede";
import Rotas from "pages/MinhasRotas";
import PoliticaDeSeguranca from "pages/PoliticaDeSeguranca";
import Profile from "pages/Profile";
import SeloJuntUs from "pages/SeloJuntUs";
import Termos from "pages/TermosDeUso";
import Atualizações from "pages/Transportador/Atualizações";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [type, setType] = useState("EMBARCADOR");

  return (
    <AuthProvider>
      <BrowserRouter>
        <main className="main">
          <Sidebar type={type} />
          <div style={{ width: "100%" }}>
            <Header setType={setType} />

            <Routes>
              {/* Auth Routes */}
              <Route path="login" element={<Login />} />
              <Route path="password-change" element={<PasswordChange />} />
              <Route path="register" element={<Register />} />

              <Route path="/" element={<HomeRoute type={type} />} />

              <Route path="minhas-rotas" element={<Rotas />} />
              <Route path="minha-rede" element={<Rede type={type} />} />
              <Route path="selo-juntus" element={<SeloJuntUs />} />

              <Route path="minha-conta" element={<MinhaConta type={type} />} />

              <Route path="empresa/:id" element={<Profile />} />
              <Route
                path="politica-de-seguranca"
                element={<PoliticaDeSeguranca />}
              />
              <Route path="termos-de-uso" element={<Termos />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

function HomeRoute({ type }: { type: string }) {
  if (type === "TRANSPORTADOR") return <Atualizações />;
  if (type === "EMBARCADOR") return <BuscarSinergias />;

  return null;
}
