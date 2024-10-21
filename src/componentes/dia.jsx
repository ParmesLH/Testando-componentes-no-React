import React from "react";

const ParaPuxar = ({dia}) => {
    return (
        <div>
        {dia ? "Bom dia" : "Boa noite"}
        </div>
    );
};

export default ParaPuxar;