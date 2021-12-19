//**@jsx  jsx*/
import React from 'react';
import { css, jsx } from '@emotion/react';

const Loader = () => <div css={styles} className="Loader"></div>;

const styles = css`
  position: absolute;
  top: 50px;
  left: 50px;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 10px;
  background: #3498db;
  border-radius: 5px;
  animation: spinner 1.85 ease-ease-in-out infinite;
  &:before &:after {
    content: "";
    position: absolute;
    display: block;
    animation: spinner 1.85 ease-ease-in-out infinite;
    height: 10px;
    border-radius: 5px;
  }
  &:before {
    top: 20px;
    left: 10px;
    width: 40px;
    background: #ef4836;
  }

  &:after {
    bottom: -20px;
    width: 35px;
    background: #f5ab35;
  }

  @Keyframs spinner {
    0% {
      transform: translate(40px);
    }
  }
`;

export default Loader;
