import Button from "components/common/Button";
import Input from "components/common/Input";
import AuthLayout from "components/layouts/AuthLayout";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PasswordChange() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    navigate("/login");
  };

  return (
    <AuthLayout>
      <div style={{ width: "85%", margin: "auto" }}>
        <div style={{ textAlign: "center" }}>
          <h3>Esqueceu a senha?</h3>
          <p>
            Insira o e-mail cadastrado e enviaremos um link para você voltar a
            acessar a sua conta.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            label="E-mail"
            name="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />

          <div className="buttons-container">
            <Button submit type="primary">
              Enviar
            </Button>
          </div>
        </form>

        <div>
          <p>
            Não tem uma conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
