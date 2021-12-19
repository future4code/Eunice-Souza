//**@jsx */
import React from 'react'
import { css, jsx } from "@emotion/react"


const Hero = () => {
  return (
    <section css={styles} className="hero">
      <h1>Hello</h1>
    </section>
  )
};

const styles = css`
width: 100px;
min-height: 100vh;
background: #1b1c22;
`;
export default Hero;
