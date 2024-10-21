import React from "react";

const VerificarNota = ({ nota }) => {
    if (nota >= 90) {
        return <div>Exelente</div>
    } else if (nota >= 70 && nota <90) {
        return <div>Bom</div>
    } else {
        return <div>Precisa melhorar</div>
    }
};

export default VerificarNota