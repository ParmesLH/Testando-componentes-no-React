import React from "react";

const VerificarNivel = ({ nivel }) => { 
    return (
        <div>
            {nivel === "Iniciante" ? "Bem-vindo, Iniciante" : nivel === "Intermediario" ? "Voce esta progredindo!" : nivel === "Avancado" ? "Parabens, especialista!" : "Nivel desconhcido"}
        </div>
    );
};

export default VerificarNivel;