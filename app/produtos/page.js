'use client';


import { useState } from "react";
import Painel from "../contato/page";

function produtos(){
    return(
        <div>
            <h1>Produtos</h1>
            <p>Bem-vindo a página de produtos 😋</p>

            <hr/>

            <div style={{margim: 10, border: "1px solid grey ", width: 100,}}>
                <h2>Maçã</h2>
                <p>R$ 19,90</p>
                <button>Comprar</button>
                
            </div>
            

            

            
        </div>
    );
}
export default produtos;