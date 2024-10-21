import React from "react";

const VerificarDesconto = ({ temDesconto }) => {
    return(
        <div>
            {temDesconto ? "Desconto Aplicado" : "Sem Desconto"}
        </div>
    );
};

export default VerificarDesconto