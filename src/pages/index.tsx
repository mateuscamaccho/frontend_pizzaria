import { useState } from "react";
import { FormEvent, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.svg';

import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

import { AuthContext } from "../contexts/AuthContext";

import Link from "next/link";

export default function Home() {

  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>

            <Input
              type="text"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={false}
            >
              Acessar
            </Button>
          </form>
          <Link href="/signup">
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>

        </div>
      </div>
    </>
  )
}
