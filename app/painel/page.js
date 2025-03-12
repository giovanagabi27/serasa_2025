'use client';

import { useState } from "react";
import "./painel.css";

export default function Painel() {
    const [usuario, criarUsuario] = useState("");
    const [senha, criarSenha] = useState("");
    const [mostrarErro, criarMostrarErro] = useState(false);
    const [mostrarSucesso, criarMostrarSucesso] = useState(false);

    function entrar() {
        if (usuario === "giovana" && senha === "123") {
            criarMostrarSucesso(true);
            criarMostrarErro(false);
        } else {
            criarMostrarErro(true);
            criarMostrarSucesso(false);
        }
    }

    return (
        <div>
            <h1>Painel Administrativo</h1>
            
            <label>
                Digite o usuário:
                <input 
                    type="text" 
                    value={usuario} 
                    onChange={(e) => criarUsuario(e.target.value)}
                />
            </label>
            <br/>
            
            <label>
                Digite a senha:
                <input 
                    type="password" 
                    value={senha} 
                    onChange={(e) => criarSenha(e.target.value)}
                />
            </label>
            <br/>
            
            <button onClick={entrar}>Entrar</button>

            {mostrarErro && (
                <div className="erro">
                    <p>Usuário ou senha incorretos</p>
                </div>
            )}

            {mostrarSucesso && (
                <div className="sucesso">
                    <p>Login realizado com sucesso!</p>
                </div>
            )}
        </div>
    );
}