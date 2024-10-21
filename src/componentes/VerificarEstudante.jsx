import React from 'react'

const VerificarEstudante = ({ estudante }) => {
    if (estudante) {
        return <div>Voce e um estudante</div>;
    } else {
        return <div>Voce nao e um estudante</div>
    }
};

export default VerificarEstudante