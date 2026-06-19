import { useState } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="body">
      <div className="login-container">
        <img src="images/running4.jpg" id="imgLogin" />
        <form action="/processar-login" method="POST">
          {/* <!-- Campo de E-mail ou Usuário --> */}
          <div className="field">
            <label htmlFor="email">E-mail:</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* <!-- Campo de Senha --> */}
          <div className="field">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <!-- Link Auxiliar --> */}
          <div className="auxilliary-links">
            <a href="#" className="auxilliary-links">
              Esqueceu a senha?
            </a>
          </div>
          {/* <!-- Botão de Envio --> */}
          <button type="submit" id="buttonIn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
