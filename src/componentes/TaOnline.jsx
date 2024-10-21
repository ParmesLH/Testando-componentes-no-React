import React from "react";

const VerificarStatus = ({ online }) => {
    return (
        <div>
            {online ? "Usuario online" : "Usuario offline"}
        </div>
    );
};

export default VerificarStatus; 