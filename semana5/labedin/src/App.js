import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import eunice from "./components/eunice.jpg"
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande

          imagem={eunice}
          nome="Eunice" 
          descricao="Oi, eu sou o Eunice. Sou aluna da Labenu. Sou Massoterapeuta em transição de carreira, escolhi a area da tecnologia  porque depois de muito proucurar uma profissão que me fizesse sentido, eu vi que na programação  da a oportunidade de evoluir meu lado profissional, e financeiro alem de ser uma profissão que não parar nos da muitas oportunidades de trabalho."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
         
          imagem={eunice}
          nome="email: " 
          descricao= "email@email.com"       />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Eunice" 
          descricao="Caixa, balconista, auxiliar de produção, Massoterapeuta!" 
        />
        
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
