import React from 'react';

const VerificarIdade = ({ idade }) => {
  return (
    <div>
      {idade >= 18 ? "Você é adulto" : "Você é menor de idade"}
    </div>
  );
};

export default VerificarIdade;
