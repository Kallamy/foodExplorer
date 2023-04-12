import { Container, Form, Logo } from "./styles";

import { Link } from 'react-router-dom';

import { Button }from "../../components/Button";
export function SignIn() {

    return (
        <Container>

            <Logo>
                <div className="logo">
                        <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill="#065E7C"/>
                        </svg>

                        <h1>food explorer</h1>

                </div>

            </Logo>
           <Form>
                <h2>Faça Login</h2>


            <div className="inputGroup">
                <p>Email</p>
                <input 
                    type="email"
                    placeholder="exemplo@exemplo.com.br" 
                />
            </div>

            <div className="inputGroup">
                <p>Senha</p>
                <input 
                    type="eamail"
                    placeholder="No mímino 6 caracteres" 
                />
            </div>

            <Button
                title="Entrar"
            />

            <Link>
                Criar uma conta
            </Link>
           </Form>

        </Container>
    )
}