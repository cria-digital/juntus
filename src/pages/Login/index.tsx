import Button from "components/common/Button";
import Input from "components/common/Input";
import AuthLayout from "components/layouts/AuthLayout";
import { login } from "helpers/api/auth";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";

const capcha_key = process.env.REACT_APP_CAPTCHA_KEY;

export default function Login() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    form: [
      {
        type: "email",
        label: "Email",
        name: "email",
        placeholder: "Digite seu e-mail",
      },
      {
        type: "password",
        label: "Senha",
        name: "password",
        placeholder: "Digite sua senha",
      },
    ],
    email: "",
    password: "",
    captcha: "",
  });

  function changeField(e: any) {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  const handleChangeCaptcha = (e: any) =>
    setState((state) => ({ ...state, captcha: e }));

  const handleLogin = (e: any) => {
    e.preventDefault();

    login(state.email, state.password);
  };

  const handlePassword = (e: any) => {
    navigate("/password-change");
  };

  return (
    <AuthLayout>
      <div style={{ width: "80%", margin: "auto" }}>
        <form onSubmit={handleLogin}>
          {state.form.map((item: any) => (
            <Input
              key={item.name}
              value={state[item.name]}
              onChange={changeField}
              required
              {...item}
            />
          ))}
          <div className="catcha-container">
            <ReCAPTCHA sitekey={capcha_key} onChange={handleChangeCaptcha} />
          </div>

          <div className="buttons-container">
            <Button type="secondary" onClick={handlePassword}>
              Esqueci a Senha
            </Button>
            <Button type="primary">Entrar</Button>
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
