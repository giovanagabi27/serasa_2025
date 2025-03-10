'use client';

import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Contato() {
    const [nome, alteraNome] = useState("");
    const [mensagem, alteraMensagem] = useState("");

    function enviarMensagem(e) {
        e.preventDefault();

        if (nome === "" || mensagem === "") {
            toast.error("Por favor, preencha todos os campos!");
        } else {
            toast.success("Mensagem enviada com sucesso!");
            
        }
    }
    // Testando um teste com uma testada
    return (
        <div>
            <h1>Página de contato</h1>
            <p>Entre em contato conosco</p>
            <hr />

            <form onSubmit={enviarMensagem}>
                <label>
                    Digite seu nome:
                    <input value={nome} onChange={(e) => alteraNome(e.target.value)} />
                </label>
                <br />

                <label>
                    Digite sua mensagem:
                    <input value={mensagem} onChange={(e) => alteraMensagem(e.target.value)} />
                </label>
                <br />

                <button>Enviar</button>
            </form>
            <ToastContainer />
        </div>
    );
}
