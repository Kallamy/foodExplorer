import { Container, Logo, SearchInput} from "./styles";
import { Link } from "react-router-dom";

import { FiSearch, FiLogOut, FiUser, FiShoppingBag, FiHeart } from 'react-icons/fi';
import { Button }from "../Button";
export function Footer() {


    return (
        <Container>
           <Logo>
                <div className="logo">
                <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5391 0.909359L26.5294 8.40936V23.4094L13.5391 30.9094L0.548681 23.4094V8.40936L13.5391 0.909359Z" fill="#4D585E"/>
                </svg>

                <h1>food explorer</h1>

                </div>
           </Logo>

           <div className="copyright">© 2023 - Todos os direitos reservados. </div>

        </Container>
    )
}