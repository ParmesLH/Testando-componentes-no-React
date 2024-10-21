import React from "react";

const Img =() => {
    const urlDaImagem = 'https://images4.alphacoders.com/200/thumb-1920-200688.jpg'; 

    return (
        <div>
            <h2>Horus, Sanguinius and Anátema</h2>
            <img src={urlDaImagem} alt="img" style={{ width: '1000px', height: 'auto' }} />
        </div>
    );
};

export default Img;