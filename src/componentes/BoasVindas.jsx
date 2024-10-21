import React from 'react';

function BoasVindas ({ autenticado }) {
    if (autenticado) {
        
        return (
        <>
        <h1>Bem-vindo, usuario</h1>
        </>
        )
    } else {
        return null;
    };
};

export default BoasVindas;