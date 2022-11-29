import { useState } from "react";
import { AuthInput } from "../auth/AuthInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sign, setSign] = useState<"signIn" | "signUp">("signIn");
  return (
    <div>
      <h1>Login</h1>
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
    </div>
  );
}
