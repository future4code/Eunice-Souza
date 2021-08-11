import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 80px;
img {
  width: 5%;
  margin-right: 10px;
}

div{
    display: flex;
}

h4{
    margin-right: 5px
}
` 

function CardPequeno(props) {
    return (
        <Container>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
                
            </div>
        
        </Container>
    )
}

export default CardPequeno;