import Button from "components/common/Button";
import Input from "components/common/Input";
import AuthLayout from "components/layouts/AuthLayout";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { inputs } from "./registerInputs";

export default function Register() {
  const [state, setState] = useState({
    sections: inputs,
    section: 0,
    success: false,
  });

  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    category: "",
    cnpj: "",
    razaoSocial: "",
    site: "",
    telefone: "",
    cep: "",
    numero: "",
    complemento: "",
    origem: "",
    destino: "",
    quantidade: "",
  });

  const inputsRef = useRef(null);

  function changeField(e: any) {
    const { name, value } = e.target;
    setData((state) => ({
      ...state,
      [name]: value,
    }));
  }

  const handleRegister = (e: any) => {
    e.preventDefault();

    for (let field of Object.values(data)) {
      if (field.toString().trim() === "")
        return alert("Preencha todos os campos!");
    }

    setState((state) => ({ ...state, success: true }));
  };

  const nextSection = (e: any) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword)
      return alert("As senhas não conferem!");

    for (let input of state.sections[state.section]) {
      if (data[input.name].trim() === "")
        return alert("Preencha todos os campos");
    }

    setState((state) => ({ ...state, section: state.section + 1 }));
  };

  const lastSection = (e: any) =>
    setState((state) => ({ ...state, section: state.section - 1 }));

  const { sections, section } = state;

  if (state.success) return <RegisterComplete />;

  return (
    <AuthLayout>
      <div style={{ width: "90%", margin: "auto" }}>
        <form className="register" onSubmit={handleRegister}>
          <div
            ref={inputsRef}
            className="flex wrap"
            style={{ flexWrap: "wrap", justifyContent: "space-between" }}
          >
            {sections[section] &&
              sections[section].map((item: any) => (
                <div style={{ width: item.width }} key={item.name}>
                  <Input
                    key={item.name}
                    value={data[item.name]}
                    onChange={changeField}
                    required
                    {...item}
                    width="100%"
                  />
                </div>
              ))}
          </div>

          <div style={{ width: "90%" }}>
            <div className="buttons-container">
              {state.section === 2 ? (
                <Button type="primary" submit>
                  Entrar
                </Button>
              ) : (
                <Button type="primary" submit={false} onClick={nextSection}>
                  Próximo
                </Button>
              )}
            </div>
          </div>
        </form>

        <div>
          {section === 0 ? (
            <p>
              Não tem uma conta? <Link to="/login">Faça Login</Link>
            </p>
          ) : (
            <p onClick={lastSection}>Voltar</p>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}

function RegisterComplete() {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div style={{ textAlign: "center", width: "60%", margin: "auto" }}>
        <h3 style={{ margin: "40px auto" }}>Cadastro realizado com sucesso!</h3>
        <p style={{ margin: "40px auto" }}>
          Enviamos um e-mail para confirmar o seu cadastro. <br /> Seja
          bem-vindo a JuntUs!
        </p>
        <Button
          type="primary"
          submit={false}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </div>
    </AuthLayout>
  );
}
