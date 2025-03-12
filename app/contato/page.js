'use client';

import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Painel() {
    const [usuario, crieUsuario] = useState("");
    const [senha, crieSenha] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        if (usuario === "" || senha === "") {
            toast.error("Por favor, preencha todos os campos!");
        } else {
            toast.success("Login realizado com sucesso!");
        }
    }

    return (
        <div>
            <h1>Painel Administrativo</h1>
            
            <form onSubmit={handleLogin}>
                <label>
                    Digite o usuário:
                    <input 
                        type="text" 
                        value={usuario} 
                        onChange={(e) => crieUsuario(e.target.value)}
                    />
                </label>
                <br/>
                
                <label>
                    Digite a senha:
                    <input 
                        type="password" 
                        value={senha} 
                        onChange={(e) => crieSenha(e.target.value)}
                    />
                </label>
                <br/>
                
                <button type="submit">Entrar</button>
                <div >

                </div>


            </form>
            <ToastContainer />
        </div>
    );
}
