import { Container, Logo, Search} from "./styles";
import { Link } from "react-router-dom";

import { FiSearch, FiLogOut, FiUser, FiShoppingBag, FiHeart } from 'react-icons/fi';
import { Button }from "../../components/Button";
export function Header() {


    return (
        <Container>
           <Logo>
                <div className="logo">
                <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C"/>
                </svg>
                <h1>food explorer</h1>

                </div>
           </Logo>
           <Search>
                <label>
                    <FiSearch size={24}/>
                    <input
                         placeholder="Busque pelos nossos pratos"
                    />
                </label>
           </Search>

           <Button title="Pedidos (0)"/>

           <div className="exitButton">
            <FiLogOut/>
           </div>


        </Container>
    )
}