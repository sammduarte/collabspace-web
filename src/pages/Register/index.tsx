import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Form,
  ErrorAlert,
  Group,
  Label,
  Input,
  AreaEmail,
  AreaPassword,
  PasswordMeter,
  Button,
  LinkLogin,
} from "./styles";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const areaEmail = !name || !birthDate;
  const areaPassword = !email || !confirmEmail || areaEmail;
  const isTheSameEmails = email === confirmEmail;
  const isEmail = email.match(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  );
  const isTheSamePasswords = password === confirmPassword;
  const isPasswordStrong = password.match(
    /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  );

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <Container>
      <Form autoComplete="on">
        <h1>Cadastre-se</h1>

        {email && !isEmail && <ErrorAlert>O e-mail não é válido!</ErrorAlert>}
        {confirmEmail && !isTheSameEmails && (
          <ErrorAlert>Os e-mails não coincidem!</ErrorAlert>
        )}
        {confirmPassword && !isTheSamePasswords && (
          <ErrorAlert>As senhas não coincidem!</ErrorAlert>
        )}

        <Group>
          <Label htmlFor="name">Nome</Label>

          <Input
            type="text"
            id="name"
            placeholder="Seu nome completo"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Group>

        <Group>
          <Label htmlFor="birthdate">Data de nascimento</Label>

          <Input
            type="date"
            id="birthdate"
            value={birthDate}
            min="1900-01-01"
            max="2022-12-31"
            required
            onChange={(e) => {
              setBirthDate(e.target.value);
            }}
          />
        </Group>

        <AreaEmail $areaEmail={areaEmail}>
          <Label htmlFor="email">Endereço de e-mail</Label>

          <Input
            type="text"
            id="email"
            placeholder="Seu e-mail"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Input
            type="text"
            id="confirmarEmail"
            placeholder="Confirmar e-mail"
            value={confirmEmail}
            required
            onChange={(e) => {
              setConfirmEmail(e.target.value);
            }}
            onPaste={(e) => {
              e.preventDefault();
            }}
          />
        </AreaEmail>

        <AreaPassword
          $areaPassword={areaPassword || !isTheSameEmails || !isEmail}
        >
          <Label htmlFor="password">Sua senha secreta</Label>

          <Input
            type="password"
            id="password"
            placeholder="Sua senha"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          {password && <PasswordMeter $isWeak={!isPasswordStrong} />}

          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirmar senha"
            value={confirmPassword}
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            onPaste={(e) => {
              e.preventDefault();
            }}
          />
        </AreaPassword>

        <Button
          disabled={
            areaEmail ||
            areaPassword ||
            !isTheSameEmails ||
            !isEmail ||
            !isTheSamePasswords ||
            !isPasswordStrong
          }
        >
          Cadastrar
        </Button>

        <LinkLogin>
          <p>Já sou cadastrado?</p>
          <a onClick={handleLogin}>Entrar agora</a>
        </LinkLogin>
      </Form>
    </Container>
  );
};

export default Register;
