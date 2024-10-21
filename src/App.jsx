import React from 'react'
import Welcome from './componentes/App'
import Saudacao from './componentes/Saudacao';
import BoasVindas from './componentes/BoasVindas';
import VerificarIdade from './componentes/verificar';
import VerificarEstudante from './componentes/VerificarEstudante';
import VerificarNota from './componentes/verNota';
import VerificarDesconto from './componentes/Desconto';
import VerificarStatus from './componentes/TaOnline';
import VerificarNivel from './componentes/InicianteP';
import BotaoLogin from './componentes/BotaoLogin';
import OlaMundo from './componentes/OlaMundo';
import Warhammer40k from './componentes/Simples';
import ListaDeConquista from './componentes/Como';
import Img from './componentes/TesteIMG';
import Botao from './componentes/Botao';
import LinkReact from './componentes/DoReact';
import Titulo from './componentes/H1test';
import ParaPuxar from './componentes/dia';
import DivEstilizada from './componentes/Frufru';
import Fragment from './componentes/Test';

function App () {
  const usuarioAutenticado = true;
  const idade = 20; 
  const estudante = false;
  const nota = 70;
  const temDesconto = true;
  const online = false;
  const nivel = "Intermediario"; //alterne entre Iniciante, Intermediario e Avancado para alterar a mensagem
  const logado = false; // alterne entre false e true para mudar o botao
  const dia = false; //alternar entre false e true para mudar

  return (
    <div className='App'>
      <Welcome />
      <Saudacao nome="Luan" />
      <BoasVindas autenticado={usuarioAutenticado} />
      <VerificarIdade idade={idade} />
      <VerificarEstudante estudante={estudante} />
      <VerificarNota nota={nota}/>
      <VerificarDesconto temDesconto={temDesconto} />
      <VerificarStatus online={online} />
      <VerificarNivel nivel={nivel} />
      <BotaoLogin logado={logado} />
      <OlaMundo />
      <Warhammer40k />
      <ListaDeConquista /> 
      <Img />
      <Botao />
      <LinkReact />
      <Titulo />
      <ParaPuxar dia={dia} />
      <DivEstilizada />
      <Fragment />
      

    </div>
  );
};

export default App;