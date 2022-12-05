import { useState } from "react";
import { AuthInput } from "../auth/AuthInput";
import { WarningIcon } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Login() {
  const { signUp, login, loginGoogle } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sign, setSign] = useState<"signIn" | "signUp">("signIn");
  const [error, setError] = useState(null);

  async function submit() {
    try {
      if (sign === "signIn") {
        await login(email, password);
      } else {
        await signUp(email, password);
      }
    } catch (error) {
      showError(error?.message ?? "Ocorreu um erro!");
    }
  }

  function showError(msg: any, time = 3) {
    setError(msg);
    setTimeout(() => {
      setError(null);
    }, time * 1000);
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="hidden md:block w-1/2 lg:w-2/3">
        <img
          src="/login.jpg"
          alt="imagem de login"
          className="h-screen w-full object-cover"
        />
      </div>

      <div className="m-10 md:w-1/2 w-full lg:1/3">
        <h1 className="text-3xl font-bold mb-5 ">
          {sign === "signIn"
            ? "Entre com sua conta"
            : "Cadastre-se na plataforma"}
        </h1>

        {error ? (
          <div className="flex items-center  gap-2 bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
            {WarningIcon()}
            <span>{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          typeInput="email"
          value={email}
          changeValue={setEmail}
          required
        />

        <AuthInput
          label="Senha"
          typeInput="password"
          value={password}
          changeValue={setPassword}
          required
        />

        <button
          className="w-full bg-indigo-600 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6"
          onClick={submit}
        >
          {sign === "signIn" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="my-6 border-gray-300" />

        <button
          className="w-full bg-red-600 hover:bg-red-400 text-white rounded-lg px-4 py-3 "
          onClick={loginGoogle}
        >
          Entrar com o Google
        </button>
        {sign === "signIn" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setSign("signUp")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              {" "}
              Cria uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade
            <a
              onClick={() => setSign("signIn")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              {" "}
              Entre com sua conta
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
