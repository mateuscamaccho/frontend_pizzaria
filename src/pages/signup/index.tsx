import Head from "next/head";
import Image from "next/image";
import styles from '../../../styles/home.module.scss';

import logoImg from '../../../public/logo.svg';

import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

import Link from "next/link";

export default function Signup() {
    return (
        <>
            <Head>
                <title>Faça seu cadastro agora</title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
                <div className={styles.login}>
                    <h1>Criando sua conta</h1>
                    <form>

                        <Input
                            type="email"
                            placeholder="Digite seu nome"
                        />

                        <Input
                            type="email"
                            placeholder="Digite seu e-mail"
                        />

                        <Input
                            type="password"
                            placeholder="Digite sua senha"
                        />

                        <Button
                            type="submit"
                            loading={false}
                        >
                            Cadastrar
                        </Button>
                    </form>
                    <Link href="/">
                        <a className={styles.text}>Já possui uma conta? Faça o login!</a>
                    </Link>

                </div>
            </div>
        </>
    )
}
