'use client';


import { useState } from "react";
import Painel from "../contato/page";
import Produto from "./components/Produto";

function produtos(){
    return(
        <div>
            <h1>Produtos</h1>
            <p>Bem-vindo a página de produtos 😋</p>

            <hr/>

           <Produto/>
           <Produto/>
           <Produto/>
           <Produto/>
           
           
           

           

            

            
        </div>
    );
}
export default produtos;